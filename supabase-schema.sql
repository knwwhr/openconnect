-- =====================================================
-- InsideJob 커리어 진단 플랫폼 - Supabase 스키마
-- =====================================================

-- 1. 사용자 프로필 테이블
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age_group VARCHAR(20) NOT NULL,
    privacy_consent BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. 진단 결과 테이블
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    step1_responses JSONB,
    step2_responses JSONB,
    step3_responses JSONB,
    recommended_jobs JSONB,
    riasec_scores JSONB,
    action_plan TEXT,
    is_completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_user_profiles_created_at ON user_profiles(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_assessments_user_id ON assessments(user_id);
CREATE INDEX IF NOT EXISTS idx_assessments_completed ON assessments(is_completed);
CREATE INDEX IF NOT EXISTS idx_assessments_created_at ON assessments(created_at DESC);

-- 4. RLS (Row Level Security) 활성화
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- 5. 공개 읽기 정책 (누구나 자신의 데이터 조회 가능)
CREATE POLICY "Enable read access for all users" ON user_profiles
    FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON user_profiles
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON assessments
    FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON assessments
    FOR INSERT WITH CHECK (true);

-- 6. 통계 뷰 (관리자용)
CREATE OR REPLACE VIEW assessment_stats AS
SELECT
    COUNT(*) as total_assessments,
    COUNT(DISTINCT user_id) as unique_users,
    COUNT(CASE WHEN is_completed = true THEN 1 END) as completed_assessments,
    DATE_TRUNC('day', created_at) as assessment_date
FROM assessments
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY assessment_date DESC;

-- 완료!
SELECT 'Supabase 스키마 생성 완료!' as status;
