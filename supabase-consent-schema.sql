-- =====================================================
-- InsideJob - 개인정보 동의 기록 테이블
-- =====================================================
-- 목적: 개인정보보호법 제22조에 따른 동의 기록 보관
-- 보관 기간: 3년 (법적 요구사항)
-- =====================================================

-- 1. 동의 기록 테이블 생성
CREATE TABLE IF NOT EXISTS consent_records (
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

-- 2. 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_consent_email ON consent_records(email);
CREATE INDEX IF NOT EXISTS idx_consent_agreed_at ON consent_records(agreed_at DESC);

-- 3. 중복 동의 방지 (같은 이메일로 10분 내 중복 동의 불가)
CREATE UNIQUE INDEX IF NOT EXISTS idx_consent_email_recent
ON consent_records(email, (agreed_at::date))
WHERE agreed_at > NOW() - INTERVAL '10 minutes';

-- 4. RLS (Row Level Security) 활성화
ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;

-- 5. 기존 정책 삭제 (재실행 시 에러 방지)
DROP POLICY IF EXISTS "Enable insert for all users" ON consent_records;
DROP POLICY IF EXISTS "Enable read for own email" ON consent_records;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON consent_records;
DROP POLICY IF EXISTS "Allow public select" ON consent_records;

-- 6. 정책 1: 익명 사용자도 동의 기록 삽입 가능
CREATE POLICY "Allow anonymous inserts" ON consent_records
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 7. 정책 2: 모든 사용자가 조회 가능 (관리 목적)
CREATE POLICY "Allow public select" ON consent_records
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- 7. 통계 뷰 생성 (관리자용 - 개인정보 제외)
CREATE OR REPLACE VIEW consent_statistics AS
SELECT
    DATE(agreed_at) as consent_date,
    COUNT(*) as total_consents,
    COUNT(DISTINCT email) as unique_users,
    consent_version
FROM consent_records
WHERE agreed = true
GROUP BY DATE(agreed_at), consent_version
ORDER BY consent_date DESC;

-- 8. 3년 이상 된 동의 기록 자동 삭제 함수
CREATE OR REPLACE FUNCTION delete_old_consents()
RETURNS void AS $$
BEGIN
    DELETE FROM consent_records
    WHERE agreed_at < NOW() - INTERVAL '3 years';
END;
$$ LANGUAGE plpgsql;

-- 9. 자동 삭제 스케줄 (선택사항 - Supabase Pro 필요)
-- SELECT cron.schedule(
--     'delete-old-consents',
--     '0 0 1 * *', -- 매월 1일 자정
--     'SELECT delete_old_consents();'
-- );

-- 10. 테스트 데이터 확인
SELECT
    'Supabase 동의 기록 테이블 생성 완료!' as status,
    COUNT(*) as current_records
FROM consent_records;

-- =====================================================
-- 사용 예시:
-- =====================================================
-- 1. 동의 기록 삽입
-- INSERT INTO consent_records (email, agreed, consent_version)
-- VALUES ('user@example.com', true, '1.0');
--
-- 2. 특정 이메일 동의 기록 조회
-- SELECT * FROM consent_records WHERE email = 'user@example.com';
--
-- 3. 통계 조회
-- SELECT * FROM consent_statistics;
-- =====================================================
