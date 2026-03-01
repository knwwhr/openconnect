-- =====================================================
-- InsideJob 통합 Supabase 스키마
-- 프로젝트: insidejob (lpdnamuecwgowdwqxugg)
-- 3개 기존 프로젝트를 하나로 통합
-- =====================================================

-- =====================================================
-- 1. 동의 기록 (개인정보보호법 제22조)
-- =====================================================
CREATE TABLE consent_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL,
    agreed BOOLEAN NOT NULL DEFAULT true,
    consent_version VARCHAR(10) NOT NULL DEFAULT '1.0',
    agreed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_consent_email ON consent_records(email);
CREATE INDEX idx_consent_agreed_at ON consent_records(agreed_at DESC);
-- 중복 동의는 허용 (같은 이메일 여러 번 동의 가능)

-- =====================================================
-- 2. 사용자 프로필 (진단 시 입력)
-- =====================================================
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100),
    gender VARCHAR(10),
    phone VARCHAR(20),
    age_group VARCHAR(20),
    privacy_consent BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 3. 진단 결과
-- =====================================================
CREATE TABLE assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    step1_responses JSONB,
    step2_responses JSONB,
    step3_responses JSONB,
    recommended_jobs JSONB,
    riasec_scores JSONB,
    action_plan JSONB,
    is_completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_assessments_user ON assessments(user_id);
CREATE INDEX idx_assessments_completed ON assessments(completed_at DESC);

-- =====================================================
-- 4. RLS 활성화 + 정책
-- =====================================================
ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- consent_records: 누구나 삽입/조회
CREATE POLICY "consent_insert" ON consent_records FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "consent_select" ON consent_records FOR SELECT TO anon, authenticated USING (true);

-- user_profiles: 누구나 삽입/조회
CREATE POLICY "profiles_insert" ON user_profiles FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "profiles_select" ON user_profiles FOR SELECT TO anon, authenticated USING (true);

-- assessments: 누구나 삽입/조회
CREATE POLICY "assessments_insert" ON assessments FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "assessments_select" ON assessments FOR SELECT TO anon, authenticated USING (true);

-- =====================================================
-- 5. 통계 뷰
-- =====================================================
CREATE OR REPLACE VIEW consent_statistics AS
SELECT
    DATE(agreed_at) as consent_date,
    COUNT(*) as total_consents,
    COUNT(DISTINCT email) as unique_users
FROM consent_records
WHERE agreed = true
GROUP BY DATE(agreed_at)
ORDER BY consent_date DESC;

-- =====================================================
-- 확인
-- =====================================================
SELECT '✅ InsideJob 통합 스키마 생성 완료!' as status;
