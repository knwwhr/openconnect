-- =====================================================
-- InsideJob - 개인정보 동의 기록 시스템 (첫 설치용)
-- =====================================================
-- 프로젝트: insidejob-consent-records
-- 목적: 개인정보보호법 제22조에 따른 동의 기록 보관
-- 보관 기간: 3년 (법적 요구사항)
-- =====================================================
-- 주의: 이 파일은 완전히 새로운 Supabase 프로젝트에서 처음 실행할 때만 사용하세요
-- =====================================================

-- =====================================================
-- STEP 1: 테이블 생성
-- =====================================================

CREATE TABLE consent_records (
    -- 기본 키
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- 사용자 식별 정보
    email VARCHAR(255) NOT NULL,

    -- 동의 정보
    agreed BOOLEAN NOT NULL DEFAULT true,
    consent_version VARCHAR(10) NOT NULL DEFAULT '1.0',

    -- 동의 시각
    agreed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- 선택적 메타데이터 (분쟁 해결용)
    ip_address INET,
    user_agent TEXT,

    -- 생성 시각
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- STEP 2: 인덱스 생성 (성능 최적화)
-- =====================================================

-- 이메일 인덱스
CREATE INDEX idx_consent_email
ON consent_records(email);

-- 동의 시각 인덱스 (최신순 정렬용)
CREATE INDEX idx_consent_agreed_at
ON consent_records(agreed_at DESC);

-- 참고: 중복 동의는 애플리케이션 레벨에서 처리 (같은 날짜에 여러 번 클릭해도 OK)

-- =====================================================
-- STEP 3: RLS (Row Level Security) 활성화
-- =====================================================

ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- STEP 4: RLS 정책 생성
-- =====================================================

-- 정책 1: 익명 사용자도 동의 기록 삽입 가능
CREATE POLICY "Allow anonymous inserts"
ON consent_records
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 정책 2: 모든 사용자가 조회 가능 (통계 목적)
CREATE POLICY "Allow public select"
ON consent_records
FOR SELECT
TO anon, authenticated
USING (true);

-- =====================================================
-- STEP 5: 통계 뷰 생성 (관리자용)
-- =====================================================

CREATE VIEW consent_statistics AS
SELECT
    DATE(agreed_at) as consent_date,
    COUNT(*) as total_consents,
    COUNT(DISTINCT email) as unique_users,
    consent_version
FROM consent_records
WHERE agreed = true
GROUP BY DATE(agreed_at), consent_version
ORDER BY consent_date DESC;

-- =====================================================
-- STEP 6: 유틸리티 함수 생성
-- =====================================================

-- 3년 이상 된 동의 기록 자동 삭제 함수
CREATE FUNCTION delete_old_consents()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM consent_records
    WHERE agreed_at < NOW() - INTERVAL '3 years';

    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 특정 이메일의 최근 동의 기록 조회 함수
CREATE FUNCTION get_consent_by_email(user_email VARCHAR)
RETURNS TABLE (
    id UUID,
    email VARCHAR,
    agreed BOOLEAN,
    consent_version VARCHAR,
    agreed_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        cr.id,
        cr.email,
        cr.agreed,
        cr.consent_version,
        cr.agreed_at
    FROM consent_records cr
    WHERE cr.email = user_email
    ORDER BY cr.agreed_at DESC
    LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- STEP 7: 테스트 및 확인
-- =====================================================

-- 테이블 정보 확인
SELECT
    'consent_records 테이블 생성 완료!' as status,
    COUNT(*) as current_records,
    MIN(agreed_at) as earliest_consent,
    MAX(agreed_at) as latest_consent
FROM consent_records;

-- RLS 정책 확인
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE tablename = 'consent_records';

-- 인덱스 확인
SELECT
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'consent_records';

-- =====================================================
-- 완료!
-- =====================================================
SELECT
    '✅ InsideJob 동의 기록 시스템 구축 완료!' as message,
    'Supabase 프로젝트: insidejob-consent-records' as project,
    NOW() as completed_at;

-- =====================================================
-- 사용 예시
-- =====================================================

-- 1. 동의 기록 삽입
-- INSERT INTO consent_records (email, agreed, consent_version, user_agent)
-- VALUES ('test@example.com', true, '1.0', 'Mozilla/5.0...');

-- 2. 특정 이메일의 동의 기록 조회
-- SELECT * FROM get_consent_by_email('test@example.com');

-- 3. 전체 동의 기록 조회
-- SELECT * FROM consent_records ORDER BY agreed_at DESC LIMIT 10;

-- 4. 통계 조회
-- SELECT * FROM consent_statistics;

-- 5. 오늘 동의한 사용자 수
-- SELECT COUNT(*) as today_consents
-- FROM consent_records
-- WHERE DATE(agreed_at) = CURRENT_DATE;

-- 6. 3년 이상 된 기록 삭제
-- SELECT delete_old_consents();
