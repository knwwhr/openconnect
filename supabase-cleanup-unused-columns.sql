-- =====================================================
-- InsideJob - 불필요한 컬럼 제거 (개인정보 정책 준수)
-- =====================================================
-- 목적: 동의서에 명시되지 않은 개인정보 수집 항목 제거
-- 실행일: 2025년 1월 7일
-- =====================================================

-- =====================================================
-- 현재 상황 확인
-- =====================================================
-- 현재 테이블 구조:
--   - email (사용 중 ✅)
--   - agreed (사용 중 ✅)
--   - consent_version (사용 중 ✅)
--   - agreed_at (사용 중 ✅)
--   - created_at (사용 중 ✅)
--   - ip_address (미사용 ❌ - 동의서에 없음)
--   - user_agent (미사용 ❌ - 동의서에 없음)
-- =====================================================

-- =====================================================
-- STEP 1: 기존 데이터 확인 (삭제 전 백업용)
-- =====================================================

-- 현재 저장된 데이터 확인
SELECT
    COUNT(*) as total_records,
    COUNT(ip_address) as has_ip_count,
    COUNT(user_agent) as has_user_agent_count
FROM consent_records;

-- 샘플 데이터 조회 (최신 5개)
SELECT
    id,
    email,
    agreed,
    consent_version,
    agreed_at,
    ip_address,
    user_agent
FROM consent_records
ORDER BY agreed_at DESC
LIMIT 5;

-- =====================================================
-- STEP 2: 불필요한 컬럼 제거
-- =====================================================

-- ip_address 컬럼 제거
ALTER TABLE consent_records
DROP COLUMN IF EXISTS ip_address;

-- user_agent 컬럼 제거
ALTER TABLE consent_records
DROP COLUMN IF EXISTS user_agent;

-- =====================================================
-- STEP 3: 결과 확인
-- =====================================================

-- 테이블 구조 확인
SELECT
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'consent_records'
ORDER BY ordinal_position;

-- 최종 테이블 구조 (예상 결과):
-- ┌─────────────────┬────────────────────────────┬─────────────┐
-- │ column_name     │ data_type                  │ is_nullable │
-- ├─────────────────┼────────────────────────────┼─────────────┤
-- │ id              │ uuid                       │ NO          │
-- │ email           │ character varying          │ NO          │
-- │ agreed          │ boolean                    │ NO          │
-- │ consent_version │ character varying          │ NO          │
-- │ agreed_at       │ timestamp with time zone   │ YES         │
-- │ created_at      │ timestamp with time zone   │ YES         │
-- └─────────────────┴────────────────────────────┴─────────────┘

-- =====================================================
-- STEP 4: 통계 뷰 재확인
-- =====================================================

-- 통계 뷰가 정상 작동하는지 확인
SELECT * FROM consent_statistics LIMIT 5;

-- =====================================================
-- 완료!
-- =====================================================
SELECT
    '✅ 불필요한 컬럼 제거 완료!' as message,
    '동의서에 명시된 항목만 수집합니다' as note,
    NOW() as completed_at;

-- =====================================================
-- 참고: 동의서에 명시된 서버 저장 항목
-- =====================================================
-- ✅ email - 이메일 주소 (동의 증명용)
-- ✅ agreed - 동의 여부
-- ✅ consent_version - 동의서 버전
-- ✅ agreed_at - 동의 시각
-- ✅ created_at - 생성 시각

-- ❌ ip_address - 제거됨 (동의서에 명시 없음)
-- ❌ user_agent - 제거됨 (동의서에 명시 없음)
