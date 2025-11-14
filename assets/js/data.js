// Assessment Data Structure
// Designed for future backend integration

const ASSESSMENT_DATA = {
    // Step 1: Strengths Discovery Questions
    step1: {
        title: "강점 발견",
        questions: [
            {
                id: "educational_background",
                type: "multiple_choice",
                question: "전공이나 학과는 무엇인가요? (가장 가까운 것을 선택하세요)",
                options: [
                    { id: "engineering", text: "공학계열 (컴퓨터공학, 전기공학, 기계공학 등)", bonus_jobs: ["software_developer", "frontend_developer", "backend_developer", "fullstack_developer", "mobile_developer", "ai_ml_engineer", "devops_engineer", "cloud_engineer"] },
                    { id: "business", text: "경영/경제계열", bonus_jobs: ["business_developer", "marketing_manager", "consultant", "financial_analyst", "investment_analyst"] },
                    { id: "design", text: "디자인/예술계열", bonus_jobs: ["ux_ui_designer", "graphic_designer", "brand_designer", "product_designer", "web_designer", "video_editor", "illustrator"] },
                    { id: "liberal_arts", text: "인문계열", bonus_jobs: ["content_creator", "copywriter", "education_trainer", "pr_specialist", "content_marketer"] },
                    { id: "science", text: "자연과학계열", bonus_jobs: ["data_scientist", "bio_researcher", "clinical_researcher", "medical_data_analyst"] },
                    { id: "social_science", text: "사회과학계열", bonus_jobs: ["career_counselor", "consultant", "pr_specialist", "training_coordinator"] },
                    { id: "other", text: "기타/비전공자", bonus_jobs: [] }
                ]
            },
            {
                id: "values_priorities",
                type: "ranking",
                question: "일할 때 가장 중요하게 생각하는 가치를 3개 골라 순서대로 선택해주세요",
                options: [
                    { id: "stability", text: "안정성", desc: "평생 직장, 월급 걱정 없는 삶", weight: { R: 2, I: 1, A: 0, S: 1, E: 1, C: 3 } },
                    { id: "growth", text: "성장", desc: "계속 배우고 발전할 수 있는 환경", weight: { R: 1, I: 2, A: 2, S: 1, E: 3, C: 1 } },
                    { id: "creativity", text: "창의성", desc: "새로운 아이디어를 마음껏 펼칠 수 있는 일", weight: { R: 0, I: 1, A: 3, S: 1, E: 2, C: 0 } },
                    { id: "autonomy", text: "자유로움", desc: "내 방식대로 일할 수 있는 자율성", weight: { R: 2, I: 2, A: 2, S: 0, E: 3, C: 1 } },
                    { id: "social_impact", text: "의미있는 일", desc: "사회에 도움이 되고 가치있는 일", weight: { R: 1, I: 1, A: 1, S: 3, E: 1, C: 1 } },
                    { id: "income", text: "높은 수입", desc: "돈을 많이 벌 수 있는 일", weight: { R: 1, I: 1, A: 0, S: 1, E: 3, C: 2 } },
                    { id: "work_life_balance", text: "워라밸", desc: "일과 개인 시간의 적절한 균형", weight: { R: 2, I: 1, A: 1, S: 2, E: 0, C: 2 } }
                ],
                maxSelections: 3
            },
            {
                id: "work_environment",
                type: "scale",
                question: "어떤 업무 환경을 선호하는지 알려주세요 (1: 별로, 5: 정말 좋아요)",
                options: [
                    { id: "indoor_work", text: "실내에서 일하기", scale: [1, 2, 3, 4, 5] },
                    { id: "flexible_schedule", text: "자유로운 근무시간", scale: [1, 2, 3, 4, 5] },
                    { id: "team_collaboration", text: "팀원들과 함께 일하기", scale: [1, 2, 3, 4, 5] },
                    { id: "creative_tasks", text: "창의적인 업무", scale: [1, 2, 3, 4, 5] },
                    { id: "challenging_work", text: "어렵고 도전적인 업무", scale: [1, 2, 3, 4, 5] }
                ]
            },
            {
                id: "personality_riasec",
                type: "multiple_choice",
                question: "아래 일들 중에서 어떤 게 가장 재미있을 것 같나요?",
                options: [
                    { id: "hands_on", text: "손으로 뭔가를 만들거나 기계를 다루는 일", riasec: "R", weight: 3 },
                    { id: "research", text: "어려운 문제를 파헤쳐서 해답을 찾는 일", riasec: "I", weight: 3 },
                    { id: "creative", text: "새로운 아이디어로 창의적인 작품을 만드는 일", riasec: "A", weight: 3 },
                    { id: "helping", text: "사람들을 도와주고 함께 소통하는 일", riasec: "S", weight: 3 },
                    { id: "leadership", text: "앞장서서 팀을 이끌고 사업을 추진하는 일", riasec: "E", weight: 3 },
                    { id: "organizing", text: "복잡한 일들을 체계적으로 정리하고 관리하는 일", riasec: "C", weight: 3 }
                ]
            },
            {
                id: "strengths_experience",
                type: "multiple_select",
                question: "지금까지 살면서 '이것만큼은 꽤 잘하는 것 같다'고 느낀 것들을 골라보세요 (여러 개 선택 가능)",
                options: [
                    { id: "problem_solving", text: "문제가 생겼을 때 해결책 찾기", category: "thinking" },
                    { id: "communication", text: "다른 사람과 대화하고 소통하기", category: "social" },
                    { id: "leadership", text: "그룹에서 리더 역할 하기", category: "social" },
                    { id: "creativity", text: "새로운 아이디어 떠올리기", category: "thinking" },
                    { id: "analysis", text: "복잡한 정보를 정리하고 분석하기", category: "thinking" },
                    { id: "teamwork", text: "팀원들과 협력해서 일하기", category: "social" },
                    { id: "planning", text: "계획을 세우고 체계적으로 준비하기", category: "organizing" },
                    { id: "presentation", text: "앞에서 발표하고 설명하기", category: "social" },
                    { id: "technical", text: "컴퓨터나 기술 관련된 것들", category: "technical" },
                    { id: "learning", text: "새로운 것을 빨리 배우기", category: "thinking" }
                ]
            }
        ]
    },

    // Step 2: Job Matching Questions
    step2: {
        title: "직무 매칭",
        questions: [
            {
                id: "industry_interest",
                type: "multiple_select",
                question: "어떤 분야에서 일해보고 싶나요? 3개까지 골라주세요",
                options: [
                    { id: "technology", text: "기술/개발 (IT, 소프트웨어, 엔지니어링)", category: "technology" },
                    { id: "business_strategy", text: "경영/기획 (전략, 컨설팅, 기획)", category: "business" },
                    { id: "marketing_sales", text: "마케팅/영업 (광고, 브랜딩, 세일즈)", category: "business" },
                    { id: "creative_design", text: "디자인/창작 (시각디자인, UX, 콘텐츠)", category: "creative" },
                    { id: "finance", text: "금융/투자 (은행, 증권, 핀테크)", category: "business" },
                    { id: "education_research", text: "교육/연구 (강의, 트레이닝, R&D)", category: "service" },
                    { id: "healthcare", text: "의료/헬스케어 (의료, 바이오, 웰니스)", category: "service" },
                    { id: "media_entertainment", text: "미디어/엔터 (방송, 게임, 콘텐츠)", category: "creative" },
                    { id: "manufacturing", text: "제조/생산 (제조업, 품질관리, 물류)", category: "production" },
                    { id: "public_social", text: "공공/사회 (정부, NGO, 사회적기업)", category: "service" }
                ],
                maxSelections: 3
            },
            {
                id: "job_skill_matrix",
                type: "job_skill_matrix",
                question: "관심 직무와 필요한 스킬을 함께 평가해주세요",
                subtitle: "선택하신 분야의 직무에 대한 이해도와 관련 스킬 자신감을 평가합니다",
                items: [
                    {
                        job_id: "software_dev",
                        job_name: "개발자",
                        job_desc: "웹사이트, 앱, 프로그램을 만드는 일",
                        industries: ["technology"],
                        skill_id: "coding",
                        skill_name: "코딩/프로그래밍",
                        skill_desc: "파이썬, 자바스크립트 등으로 코드 작성하기",
                        category_icon: "💻"
                    },
                    {
                        job_id: "data_analyst",
                        job_name: "데이터 분석가",
                        job_desc: "숫자와 데이터를 분석해 인사이트를 찾는 일",
                        industries: ["technology", "business_strategy", "finance"],
                        skill_id: "data_analysis",
                        skill_name: "데이터 분석",
                        skill_desc: "엑셀, SQL, 파이썬으로 데이터 처리하기",
                        category_icon: "📊"
                    },
                    {
                        job_id: "marketing_manager",
                        job_name: "마케터",
                        job_desc: "제품을 알리고 고객을 모으는 마케팅 전략을 세우는 일",
                        industries: ["marketing_sales", "business_strategy"],
                        skill_id: "communication",
                        skill_name: "소통/커뮤니케이션",
                        skill_desc: "다양한 사람들과 원활하게 의사소통하기",
                        category_icon: "📢"
                    },
                    {
                        job_id: "product_manager",
                        job_name: "기획자",
                        job_desc: "제품이나 서비스의 방향성을 정하고 개발을 관리하는 일",
                        industries: ["business_strategy", "technology"],
                        skill_id: "planning",
                        skill_name: "기획/계획수립",
                        skill_desc: "목표 설정하고 체계적인 실행 계획 세우기",
                        category_icon: "📋"
                    },
                    {
                        job_id: "consultant",
                        job_name: "컨설턴트",
                        job_desc: "기업의 문제를 분석하고 해결 방안을 제시하는 일",
                        industries: ["business_strategy"],
                        skill_id: "analysis",
                        skill_name: "분석/사고력",
                        skill_desc: "복잡한 정보를 논리적으로 분석하고 결론 도출하기",
                        category_icon: "🔍"
                    },
                    {
                        job_id: "designer",
                        job_name: "디자이너",
                        job_desc: "UI/UX, 그래픽, 제품 등을 시각적으로 디자인하는 일",
                        industries: ["creative_design", "technology"],
                        skill_id: "design",
                        skill_name: "디자인",
                        skill_desc: "포토샵, 피그마 등으로 시각적인 결과물 만들기",
                        category_icon: "🎨"
                    },
                    {
                        job_id: "content_creator",
                        job_name: "콘텐츠 크리에이터",
                        job_desc: "영상, 글, 이미지 등 다양한 콘텐츠를 기획하고 제작하는 일",
                        industries: ["creative_design", "media_entertainment"],
                        skill_id: "creativity",
                        skill_name: "창의성/아이디어",
                        skill_desc: "새롭고 참신한 아이디어를 떠올리고 구현하기",
                        category_icon: "✨"
                    },
                    {
                        job_id: "business_analyst",
                        job_name: "비즈니스 분석가",
                        job_desc: "비즈니스 프로세스를 분석하고 개선 방안을 찾는 일",
                        industries: ["business_strategy", "finance"],
                        skill_id: "analysis",
                        skill_name: "분석/사고력",
                        skill_desc: "복잡한 정보를 논리적으로 분석하고 결론 도출하기",
                        category_icon: "📈"
                    },
                    {
                        job_id: "financial_analyst",
                        job_name: "금융 분석가",
                        job_desc: "투자, 재무, 리스크 등을 분석해 금융 의사결정을 돕는 일",
                        industries: ["finance"],
                        skill_id: "data_analysis",
                        skill_name: "데이터 분석",
                        skill_desc: "엑셀, SQL로 금융 데이터 처리하기",
                        category_icon: "💰"
                    },
                    {
                        job_id: "teacher",
                        job_name: "교육/강사",
                        job_desc: "학생이나 직장인에게 지식과 스킬을 가르치는 일",
                        industries: ["education_research"],
                        skill_id: "presentation",
                        skill_name: "발표하기",
                        skill_desc: "PPT 만들고 사람들 앞에서 설득력 있게 발표하기",
                        category_icon: "👨‍🏫"
                    }
                ]
            }
        ]
    },

    // Step 3: Action Plan Questions
    step3: {
        title: "실행 계획",
        questions: [
            {
                id: "career_timeline",
                type: "multiple_choice",
                question: "언제쯤 취업을 원하시나요?",
                options: [
                    { id: "3months", text: "빨리 해야 해요 (3개월 안)", urgency: "high" },
                    { id: "6months", text: "6개월 정도", urgency: "medium" },
                    { id: "1year", text: "1년 정도", urgency: "low" },
                    { id: "flexible", text: "아직 정확한 시기를 정하지 못했어요", urgency: "flexible" }
                ]
            },
            {
                id: "preparation_status",
                type: "multiple_select",
                question: "지금 취업을 위해 준비된 것들이 있다면 골라주세요 (여러 개 선택 가능)",
                options: [
                    { id: "resume", text: "이력서가 준비되어 있어요", category: "documents" },
                    { id: "portfolio", text: "포트폴리오가 있어요", category: "documents" },
                    { id: "certification", text: "자격증을 가지고 있어요", category: "skills" },
                    { id: "internship", text: "인턴 경험이 있어요", category: "experience" },
                    { id: "projects", text: "프로젝트를 해본 적이 있어요", category: "experience" },
                    { id: "networking", text: "업계 사람들과 아는 사이예요", category: "network" },
                    { id: "interview_prep", text: "면접 연습을 해봤어요", category: "preparation" },
                    { id: "none", text: "아직 아무것도 준비 안 됐어요", category: "none" }
                ]
            },
            {
                id: "learning_preference",
                type: "multiple_choice",
                question: "새로운 걸 배울 때 어떤 방법이 가장 좋나요?",
                options: [
                    { id: "online_course", text: "유튜브나 온라인 강의로 배우기", method: "self_study" },
                    { id: "bootcamp", text: "부트캠프나 학원에서 체계적으로 배우기", method: "structured" },
                    { id: "mentoring", text: "선생님이나 멘토에게 직접 배우기", method: "personal" },
                    { id: "self_study", text: "책이나 자료로 혼자 공부하기", method: "self_study" },
                    { id: "project_based", text: "직접 만들어보면서 배우기", method: "practical" }
                ]
            }
        ]
    }
};

// Job Database - Expanded to 50+ careers
const JOB_DATABASE = {
    // IT/개발 분야 (12개)
    "software_developer": {
        title: "소프트웨어 개발자",
        category: "IT/개발",
        required_skills: ["coding", "problem_solving", "technical"],
        riasec_match: ["I", "R"],
        industry: ["technology"],
        description: "컴퓨터 시스템에서 실행되는 소프트웨어를 설계, 개발, 테스트, 유지보수하는 업무",
        growth_outlook: "증가",
        avg_salary: "중위값 기준 4500만원 내외",
        data_source: "한국표준직업분류(통계청), 고용노동부 워크넷",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "frontend_developer": {
        title: "프론트엔드 개발자",
        category: "IT/개발",
        required_skills: ["coding", "design", "creativity"],
        riasec_match: ["A", "I"],
        industry: ["technology", "media_entertainment"],
        description: "사용자가 직접 보고 사용하는 웹사이트 화면을 만들어요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 5,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "backend_developer": {
        title: "백엔드 개발자", 
        category: "IT/개발",
        required_skills: ["coding", "analysis", "technical"],
        riasec_match: ["I", "R"],
        industry: ["technology", "finance"],
        description: "사용자 눈에 보이지 않는 서버와 데이터베이스 시스템을 만들어요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 3,
            challenging_work: 5
        }
    },
    "mobile_developer": {
        title: "모바일 앱 개발자",
        category: "IT/개발", 
        required_skills: ["coding", "design", "technical"],
        riasec_match: ["I", "A"],
        industry: ["technology", "media_entertainment"],
        description: "스마트폰에서 사용하는 앱을 만들고 관리해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 4,
            challenging_work: 4
        }
    },
    "data_scientist": {
        title: "데이터 사이언티스트",
        category: "IT/분석",
        required_skills: ["analysis", "data_analysis", "coding"],
        riasec_match: ["I", "R"],
        industry: ["technology", "finance", "business_strategy"],
        description: "통계학, 수학, 컴퓨터과학 기법을 활용하여 대용량 데이터에서 의미있는 정보를 추출하고 분석하는 업무",
        growth_outlook: "증가",
        avg_salary: "중위값 기준 5500만원 내외",
        data_source: "한국표준직업분류(통계청), 고용노동부 워크넷",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "data_analyst": {
        title: "데이터 분석가", 
        category: "IT/분석",
        required_skills: ["analysis", "data_analysis", "problem_solving"],
        riasec_match: ["I", "C"],
        industry: ["technology", "finance", "business_strategy"],
        description: "데이터를 수집하고 분석해서 의미 있는 인사이트를 찾아내요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 3,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "ai_engineer": {
        title: "AI 엔지니어",
        category: "IT/개발",
        required_skills: ["coding", "analysis", "technical"],
        riasec_match: ["I", "R"],
        industry: ["technology"],
        description: "인공지능 시스템과 머신러닝 모델을 개발하고 구현해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "devops_engineer": {
        title: "데브옵스 엔지니어",
        category: "IT/인프라",
        required_skills: ["technical", "problem_solving", "analysis"],
        riasec_match: ["I", "R"],
        industry: ["technology"],
        description: "개발과 운영 환경을 연결하고 자동화 시스템을 만들어요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 4,
            creative_tasks: 3,
            challenging_work: 5
        }
    },
    "security_specialist": {
        title: "정보보안 전문가",
        category: "IT/보안",
        required_skills: ["technical", "analysis", "problem_solving"],
        riasec_match: ["I", "C"],
        industry: ["technology", "finance"],
        description: "해킹과 사이버 공격으로부터 시스템을 보호하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 2,
            team_collaboration: 3,
            creative_tasks: 3,
            challenging_work: 5
        }
    },
    "system_admin": {
        title: "시스템 관리자",
        category: "IT/인프라",
        required_skills: ["technical", "problem_solving", "planning"],
        riasec_match: ["R", "C"],
        industry: ["technology", "manufacturing"],
        description: "회사의 컴퓨터 시스템과 네트워크를 관리하고 유지보수해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 2,
            team_collaboration: 3,
            creative_tasks: 2,
            challenging_work: 4
        }
    },
    "blockchain_developer": {
        title: "블록체인 개발자",
        category: "IT/개발",
        required_skills: ["coding", "technical", "analysis"],
        riasec_match: ["I", "R"],
        industry: ["technology", "finance"],
        description: "암호화폐와 블록체인 기술을 사용한 시스템을 개발해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "quality_assurance": {
        title: "QA 엔지니어",
        category: "IT/품질관리",
        required_skills: ["analysis", "technical", "problem_solving"],
        riasec_match: ["C", "I"],
        industry: ["technology", "manufacturing"],
        description: "소프트웨어의 버그를 찾아내고 품질을 검증하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 3,
            creative_tasks: 2,
            challenging_work: 4
        }
    },
    // 비즈니스/마케팅 분야 (10개)
    "marketing_manager": {
        title: "마케팅 매니저",
        category: "마케팅/기획", 
        required_skills: ["communication", "creativity", "planning"],
        riasec_match: ["E", "A"],
        industry: ["marketing_sales"],
        description: "제품이나 서비스의 시장성을 조사하고 마케팅 전략을 수립하여 판매촉진 업무를 담당해요",
        growth_outlook: "보통",
        avg_salary: "중위값 기준 4000만원 내외",
        data_source: "한국표준직업분류(통계청), 고용노동부 워크넷",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "digital_marketer": {
        title: "디지털 마케터",
        category: "마케팅/광고",
        required_skills: ["creativity", "communication", "data_analysis"],
        riasec_match: ["E", "A"],
        industry: ["marketing_sales", "media_entertainment"],
        description: "SNS, 검색광고, 이메일 등 온라인 채널로 고객을 유치해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "performance_marketer": {
        title: "퍼포먼스 마케터",
        category: "마케팅/분석",
        required_skills: ["data_analysis", "creativity", "planning"],
        riasec_match: ["E", "I"],
        industry: ["marketing_sales"],
        description: "광고 성과를 데이터로 분석하고 최적화하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 4
        }
    },
    "brand_manager": {
        title: "브랜드 매니저",
        category: "마케팅/기획",
        required_skills: ["creativity", "communication", "planning"],
        riasec_match: ["A", "E"],
        industry: ["marketing_sales", "media_entertainment"],
        description: "브랜드의 정체성을 만들고 일관된 브랜드 경험을 관리해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "business_analyst": {
        title: "비즈니스 분석가",
        category: "기획/전략",
        required_skills: ["analysis", "communication", "planning"],
        riasec_match: ["I", "E"],
        industry: ["technology", "business_strategy", "finance"],
        description: "회사의 업무 과정을 분석하고 개선 방안을 찾아내요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 4,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "sales_manager": {
        title: "세일즈 매니저",
        category: "영업/판매",
        required_skills: ["communication", "leadership", "presentation"],
        riasec_match: ["E", "S"],
        industry: ["marketing_sales", "manufacturing", "finance"],
        description: "고객에게 제품을 판매하고 영업팀을 이끌어가요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 3,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "account_manager": {
        title: "어카운트 매니저",
        category: "영업/관계관리",
        required_skills: ["communication", "planning", "teamwork"],
        riasec_match: ["S", "E"],
        industry: ["marketing_sales", "business_strategy"],
        description: "기존 고객과의 관계를 유지하고 더 많은 비즈니스를 창출해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "business_development": {
        title: "사업 개발자",
        category: "기획/사업",
        required_skills: ["communication", "analysis", "leadership"],
        riasec_match: ["E", "I"],
        industry: ["business_strategy", "technology"],
        description: "새로운 사업 기회를 찾아내고 파트너십을 만들어요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "growth_hacker": {
        title: "그로스 해커",
        category: "마케팅/분석",
        required_skills: ["data_analysis", "creativity", "technical"],
        riasec_match: ["I", "E"],
        industry: ["technology", "marketing_sales"],
        description: "데이터 분석과 실험을 통해 사업 성장을 가속화해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 5,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 5
        }
    },
    "cro_specialist": {
        title: "CRO 전문가",
        category: "마케팅/최적화",
        required_skills: ["data_analysis", "creativity", "technical"],
        riasec_match: ["I", "A"],
        industry: ["marketing_sales"],
        description: "웹사이트의 전환율을 높이기 위한 최적화 작업을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 4
        }
    },
    // 기획/제품 관리 분야 (5개)
    "product_manager": {
        title: "프로덕트 매니저",
        category: "기획/제품",
        required_skills: ["planning", "communication", "analysis"],
        riasec_match: ["E", "I"],
        industry: ["technology", "manufacturing"],
        description: "사용자가 원하는 제품을 기획하고 개발팀과 함께 만들어가요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "product_owner": {
        title: "프로덕트 오너",
        category: "기획/제품",
        required_skills: ["communication", "planning", "analysis"],
        riasec_match: ["E", "I"],
        industry: ["technology"],
        description: "사용자의 요구사항을 정리하고 개발 우선순위를 정해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "project_manager": {
        title: "프로젝트 매니저",
        category: "기획/관리",
        required_skills: ["planning", "communication", "leadership"],
        riasec_match: ["C", "E"],
        industry: ["technology", "business_strategy", "manufacturing"],
        description: "프로젝트 일정과 예산을 관리하고 팀을 조율해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "scrum_master": {
        title: "스크럼 마스터",
        category: "기획/애자일",
        required_skills: ["communication", "leadership", "teamwork"],
        riasec_match: ["S", "E"],
        industry: ["technology"],
        description: "개발팀이 효율적으로 협업할 수 있도록 프로세스를 도와줘요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "service_planner": {
        title: "서비스 기획자",
        category: "기획/서비스",
        required_skills: ["creativity", "analysis", "communication"],
        riasec_match: ["A", "I"],
        industry: ["technology", "media_entertainment"],
        description: "새로운 서비스를 기획하고 사용자 경험을 설계해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    // 디자인/크리에이티브 분야 (8개)
    "ux_designer": {
        title: "UX/UI 디자이너",
        category: "디자인/UX",
        required_skills: ["design", "creativity", "analysis"],
        riasec_match: ["A", "I"],
        industry: ["technology", "creative_design", "media_entertainment"],
        description: "사용자가 쓰기 편한 앱과 웹사이트 화면을 디자인해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 5,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "graphic_designer": {
        title: "그래픽 디자이너",
        category: "디자인/시각",
        required_skills: ["design", "creativity"],
        riasec_match: ["A", "R"],
        industry: ["creative_design", "media_entertainment", "marketing_sales"],
        description: "포스터, 로고, 브랜드 이미지 등 시각적인 디자인을 만들어요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 3
        }
    },
    "web_designer": {
        title: "웹 디자이너",
        category: "디자인/웹",
        required_skills: ["design", "technical", "creativity"],
        riasec_match: ["A", "R"],
        industry: ["technology", "creative_design", "media_entertainment"],
        description: "웹사이트의 레이아웃과 디자인을 기획하고 구현해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 3
        }
    },
    "brand_designer": {
        title: "브랜드 디자이너",
        category: "디자인/브랜드",
        required_skills: ["creativity", "design", "communication"],
        riasec_match: ["A", "E"],
        industry: ["creative_design", "marketing_sales", "media_entertainment"],
        description: "브랜드의 정체성을 시각적으로 표현하는 디자인을 만들어요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "motion_graphics": {
        title: "모션 그래픽 디자이너",
        category: "디자인/영상",
        required_skills: ["creativity", "design", "technical"],
        riasec_match: ["A", "R"],
        industry: ["creative_design", "media_entertainment", "marketing_sales"],
        description: "영상과 애니메이션을 사용한 시각적 콘텐츠를 만들어요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "game_designer": {
        title: "게임 디자이너",
        category: "디자인/게임",
        required_skills: ["creativity", "design", "planning"],
        riasec_match: ["A", "I"],
        industry: ["creative_design", "media_entertainment"],
        description: "게임의 규칙, 스토리, 캐릭터 등을 기획하고 디자인해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "video_editor": {
        title: "영상 편집자",
        category: "미디어/편집",
        required_skills: ["creativity", "technical", "design"],
        riasec_match: ["A", "R"],
        industry: ["creative_design", "media_entertainment", "marketing_sales"],
        description: "촬영된 영상을 편집하고 후작업으로 완성도를 높여요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 3
        }
    },
    "photographer": {
        title: "사진작가",
        category: "미디어/사진",
        required_skills: ["creativity", "technical"],
        riasec_match: ["A", "R"],
        industry: ["creative_design", "media_entertainment", "marketing_sales"],
        description: "상업용 사진 촬영부터 예술적 작품까지 다양한 사진 작업을 해요",
        work_environment: {
            indoor_work: 2,
            flexible_schedule: 5,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    // 컨설팅/전문직 분야 (6개)
    "consultant": {
        title: "경영 컨설턴트",
        category: "컨설팅/경영",
        required_skills: ["analysis", "communication", "problem_solving"],
        riasec_match: ["E", "I"],
        industry: ["business_strategy", "finance"],
        description: "기업의 문제점을 분석하고 더 나은 경영 방법을 제안해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 2,
            team_collaboration: 4,
            creative_tasks: 3,
            challenging_work: 5
        }
    },
    "financial_analyst": {
        title: "금융 분석가",
        category: "금융/투자",
        required_skills: ["analysis", "data_analysis", "problem_solving"],
        riasec_match: ["I", "C"],
        industry: ["finance", "business_strategy"],
        description: "기업의 재무 상태를 분석하고 투자 의견을 제시해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 2,
            team_collaboration: 3,
            creative_tasks: 2,
            challenging_work: 5
        }
    },
    "investment_banker": {
        title: "투자은행가",
        category: "금융/투자",
        required_skills: ["analysis", "communication", "presentation"],
        riasec_match: ["E", "I"],
        industry: ["finance"],
        description: "기업의 자금 조달이나 인수합병을 도와주는 금융 전문가에요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 1,
            team_collaboration: 4,
            creative_tasks: 2,
            challenging_work: 5
        }
    },
    "tax_accountant": {
        title: "세무사",
        category: "회계/세무",
        required_skills: ["analysis", "planning", "technical"],
        riasec_match: ["C", "I"],
        industry: ["finance", "business_strategy"],
        description: "개인이나 기업의 세금 문제를 해결하고 절세 방안을 제안해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 3,
            creative_tasks: 2,
            challenging_work: 4
        }
    },
    "lawyer": {
        title: "변호사",
        category: "법무/법률",
        required_skills: ["analysis", "communication", "writing"],
        riasec_match: ["I", "S"],
        industry: ["business_strategy"],
        description: "법률 문제를 다루고 고객의 권익을 보호하는 일을 해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 3,
            creative_tasks: 3,
            challenging_work: 5
        }
    },
    "patent_attorney": {
        title: "변리사",
        category: "법무/지식재산",
        required_skills: ["analysis", "technical", "writing"],
        riasec_match: ["I", "C"],
        industry: ["business_strategy", "technology"],
        description: "특허, 상표 등 지식재산권을 보호하고 관리하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 3,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    // 교육/연구 분야 (4개)
    "teacher": {
        title: "교사/강사",
        category: "교육/강의",
        required_skills: ["communication", "planning", "presentation"],
        riasec_match: ["S", "A"],
        industry: ["education_research"],
        description: "학생들에게 지식을 전달하고 성장을 도와주는 일을 해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 2,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 4
        }
    },
    "curriculum_designer": {
        title: "교육과정 개발자",
        category: "교육/기획",
        required_skills: ["planning", "creativity", "communication"],
        riasec_match: ["A", "I"],
        industry: ["education_research"],
        description: "효과적인 교육 프로그램과 커리큘럼을 기획하고 개발해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "researcher": {
        title: "연구원",
        category: "연구/개발",
        required_skills: ["analysis", "problem_solving", "writing"],
        riasec_match: ["I", "C"],
        industry: ["education_research", "technology"],
        description: "특정 분야의 새로운 지식을 연구하고 발견하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 5
        }
    },
    "instructional_designer": {
        title: "교육 콘텐츠 디자이너",
        category: "교육/콘텐츠",
        required_skills: ["creativity", "communication", "technical"],
        riasec_match: ["A", "S"],
        industry: ["education_research"],
        description: "온라인 강의나 교육 자료를 디자인하고 제작해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 3
        }
    },
    // 인사/관리 분야 (3개)
    "hr_specialist": {
        title: "HR 전문가",
        category: "인사/채용",
        required_skills: ["communication", "planning", "teamwork"],
        riasec_match: ["S", "E"],
        industry: ["business_strategy", "manufacturing", "finance"],
        description: "사람을 뽑고 교육시키며 회사 조직을 관리하는 일을 해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 3
        }
    },
    "operations_manager": {
        title: "운영 매니저",
        category: "운영/관리",
        required_skills: ["planning", "leadership", "analysis"],
        riasec_match: ["E", "C"],
        industry: ["manufacturing", "marketing_sales", "business_strategy"],
        description: "회사의 일상적인 업무 과정을 효율적으로 관리하고 개선해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 4,
            creative_tasks: 2,
            challenging_work: 4
        }
    },
    "office_manager": {
        title: "오피스 매니저",
        category: "총무/관리",
        required_skills: ["planning", "communication", "teamwork"],
        riasec_match: ["C", "S"],
        industry: ["business_strategy"],
        description: "사무실 운영과 직원들의 업무 환경을 관리하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 3,
            team_collaboration: 4,
            creative_tasks: 2,
            challenging_work: 3
        }
    },

    // 미디어/콘텐츠 분야 (8개)
    "content_creator": {
        title: "콘텐츠 크리에이터",
        category: "미디어/콘텐츠",
        required_skills: ["creativity", "writing", "presentation"],
        riasec_match: ["A", "E"],
        industry: ["media_entertainment", "marketing_sales"],
        description: "유튜브, 인스타그램 등에서 사람들이 좋아할 콘텐츠를 만들어요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 5,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "youtube_creator": {
        title: "유튜버",
        category: "미디어/영상",
        required_skills: ["creativity", "presentation", "technical"],
        riasec_match: ["A", "E"],
        industry: ["media_entertainment"],
        description: "유튜브에서 영상을 제작하고 많은 구독자와 소통해요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 5,
            team_collaboration: 2,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "influencer": {
        title: "인플루언서",
        category: "미디어/SNS",
        required_skills: ["creativity", "communication", "presentation"],
        riasec_match: ["A", "E"],
        industry: ["media_entertainment", "marketing_sales"],
        description: "SNS에서 팔로워들에게 영향력을 발휘하며 브랜드와 협업해요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 5,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "copywriter": {
        title: "카피라이터",
        category: "마케팅/글쓰기",
        required_skills: ["writing", "creativity", "communication"],
        riasec_match: ["A", "E"],
        industry: ["marketing_sales", "media_entertainment"],
        description: "광고나 마케팅에 사용될 매력적인 문구와 글을 써요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "journalist": {
        title: "기자/에디터",
        category: "미디어/언론",
        required_skills: ["writing", "communication", "analysis"],
        riasec_match: ["I", "A"],
        industry: ["media_entertainment"],
        description: "뉴스를 취재하고 기사를 작성해서 사람들에게 정보를 전달해요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 2,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 4
        }
    },
    "podcast_producer": {
        title: "팟캐스트 프로듀서",
        category: "미디어/오디오",
        required_skills: ["creativity", "technical", "communication"],
        riasec_match: ["A", "R"],
        industry: ["media_entertainment"],
        description: "팟캐스트 프로그램을 기획하고 제작하는 일을 해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 3
        }
    },
    "streaming_producer": {
        title: "스트리밍 PD",
        category: "미디어/라이브",
        required_skills: ["creativity", "technical", "communication"],
        riasec_match: ["A", "E"],
        industry: ["media_entertainment"],
        description: "라이브 방송 콘텐츠를 기획하고 연출하는 일을 해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 2,
            team_collaboration: 4,
            creative_tasks: 5,
            challenging_work: 4
        }
    },
    "community_manager": {
        title: "커뮤니티 매니저",
        category: "마케팅/소통",
        required_skills: ["communication", "creativity", "teamwork"],
        riasec_match: ["S", "E"],
        industry: ["media_entertainment", "marketing_sales"],
        description: "온라인 커뮤니티를 관리하고 사용자들과 소통해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 4,
            creative_tasks: 4,
            challenging_work: 3
        }
    },
    // 신직업/특수 분야 (5개)
    "esports_manager": {
        title: "e스포츠 매니저",
        category: "게임/스포츠",
        required_skills: ["communication", "planning", "teamwork"],
        riasec_match: ["E", "S"],
        industry: ["media_entertainment"],
        description: "프로게이머나 e스포츠 팀을 관리하고 대회 운영을 도와요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 5,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "pet_care_specialist": {
        title: "펫시터/반려동물 전문가",
        category: "서비스/동물",
        required_skills: ["communication", "teamwork"],
        riasec_match: ["S", "R"],
        industry: ["public_social"],
        description: "반려동물을 돌보고 주인들에게 돌봄 서비스를 해드려요",
        work_environment: {
            indoor_work: 3,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 2,
            challenging_work: 3
        }
    },
    "vr_ar_developer": {
        title: "VR/AR 개발자",
        category: "IT/신기술",
        required_skills: ["coding", "creativity", "technical"],
        riasec_match: ["I", "A"],
        industry: ["technology", "media_entertainment"],
        description: "가상현실과 증강현실 콘텐츠를 개발하고 구현해요",
        work_environment: {
            indoor_work: 5,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 5,
            challenging_work: 5
        }
    },
    "sustainability_consultant": {
        title: "ESG/지속가능성 컨설턴트",
        category: "컨설팅/환경",
        required_skills: ["analysis", "communication", "planning"],
        riasec_match: ["I", "S"],
        industry: ["business_strategy", "manufacturing"],
        description: "기업의 친환경 경영과 사회적 책임을 컨설팅해요",
        work_environment: {
            indoor_work: 4,
            flexible_schedule: 3,
            team_collaboration: 4,
            creative_tasks: 3,
            challenging_work: 4
        }
    },
    "drone_operator": {
        title: "드론 조종사/영상 촬영사",
        category: "기술/촬영",
        required_skills: ["technical", "creativity"],
        riasec_match: ["R", "A"],
        industry: ["media_entertainment", "manufacturing"],
        description: "드론을 조종해서 항공 촬영이나 배송, 점검 업무를 해요",
        work_environment: {
            indoor_work: 2,
            flexible_schedule: 4,
            team_collaboration: 3,
            creative_tasks: 4,
            challenging_work: 4
        }
    }
};

// Strengths mapping for results
const STRENGTHS_CATEGORIES = {
    thinking: {
        name: "사고형 강점",
        strengths: ["problem_solving", "analysis", "creativity", "learning"],
        description: "분석적이고 창의적인 사고를 통해 문제를 해결하는 능력"
    },
    social: {
        name: "관계형 강점", 
        strengths: ["communication", "leadership", "teamwork", "presentation"],
        description: "사람들과 소통하고 협업하며 영향력을 발휘하는 능력"
    },
    organizing: {
        name: "실행형 강점",
        strengths: ["planning", "project_mgmt", "organizing"],
        description: "체계적으로 계획하고 효율적으로 실행하는 능력"
    },
    technical: {
        name: "기술형 강점",
        strengths: ["technical", "coding", "data_analysis", "design"],
        description: "전문적인 기술과 도구를 사용하는 능력"
    }
};

// API-like functions for future backend integration
class AssessmentAPI {
    static async saveUserResponse(stepId, questionId, response) {
        // Future: POST /api/assessment/response
        const currentData = JSON.parse(localStorage.getItem('assessmentData') || '{}');
        if (!currentData[stepId]) currentData[stepId] = {};
        currentData[stepId][questionId] = response;
        localStorage.setItem('assessmentData', JSON.stringify(currentData));
    }

    static async getUserResponses() {
        // Future: GET /api/assessment/responses
        return JSON.parse(localStorage.getItem('assessmentData') || '{}');
    }

    static async calculateResults(responses) {
        // Future: POST /api/assessment/calculate
        // For now, calculate client-side
        return this.clientSideCalculation(responses);
    }

    static clientSideCalculation(responses) {
        // RIASEC scoring
        const riasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        console.log('ClientSideCalculation started with responses:', responses);
        
        // Calculate RIASEC from various responses
        if (responses.step1) {
            // From personality question
            if (responses.step1.personality_riasec) {
                const selected = responses.step1.personality_riasec;
                const option = ASSESSMENT_DATA.step1.questions[3].options.find(opt => opt.id === selected);
                if (option) {
                    riasecScores[option.riasec] += option.weight;
                }
            }

            // From values (weighted)
            if (responses.step1.values_priorities) {
                responses.step1.values_priorities.forEach((valueId, index) => {
                    const option = ASSESSMENT_DATA.step1.questions[1].options.find(opt => opt.id === valueId);
                    if (option) {
                        Object.keys(option.weight).forEach(riasec => {
                            riasecScores[riasec] += option.weight[riasec] * (3 - index); // Higher weight for higher priority
                        });
                    }
                });
            }
        }

        // Job matching calculation (개선된 차별화된 계산)
        const jobScores = {};
        const jobExplanations = {};
        
        Object.keys(JOB_DATABASE).forEach(jobId => {
            const job = JOB_DATABASE[jobId];
            let score = 0;
            let explanations = [];
            
            // 전공 보너스 (0-5점)
            let majorBonus = 0;
            if (responses.step1?.educational_background) {
                const educationOption = ASSESSMENT_DATA.step1.questions[0].options.find(opt => opt.id === responses.step1.educational_background);
                if (educationOption?.bonus_jobs?.includes(jobId)) {
                    majorBonus = 5; // 전공 일치시 5점
                    explanations.push(`전공적합도 (+${majorBonus}점)`);
                }
            }
            score = majorBonus;
            
            // RIASEC 성향 매칭 (최대 25점) - 1순위 핵심 요소
            let riasecBonus = 0;
            if (job.riasec_match && Array.isArray(job.riasec_match)) {
                job.riasec_match.forEach(riasec => {
                    const riasecScore = riasecScores[riasec] || 0;
                    riasecBonus += riasecScore * 1.67; // 25점 만점 조정
                });
            }
            const finalRiasecBonus = Math.round(Math.min(riasecBonus, 25));
            score += finalRiasecBonus;
            if (finalRiasecBonus > 0) {
                explanations.push(`성향 일치도 (+${finalRiasecBonus}점)`);
            }

            // 관심 산업 분야 매칭 (최대 10점) - 2순위 참고 요소
            let industryBonus = 0;
            if (responses.step2?.industry_interest && job.industry && Array.isArray(job.industry)) {
                job.industry.forEach(industry => {
                    if (responses.step2.industry_interest.includes(industry)) {
                        industryBonus += 5; // 산업별 5점으로 대폭 감소
                    }
                });
            }
            score += Math.min(industryBonus, 10);
            if (industryBonus > 0) {
                explanations.push(`관심 분야 일치 (+${Math.min(industryBonus, 10)}점)`);
            }

            // 스킬 자신감 매칭 (최대 22점) - 1순위 핵심 요소
            let skillBonus = 0;
            if (responses.step2?.skill_confidence && job.required_skills && Array.isArray(job.required_skills)) {
                job.required_skills.forEach(skill => {
                    const skillMapping = {
                        'coding': 'coding',
                        'analysis': 'analysis', 
                        'technical': 'technical',
                        'communication': 'communication',
                        'creativity': 'creativity',
                        'planning': 'planning',
                        'problem_solving': 'analysis',
                        'user_research': 'analysis',
                        'leadership': 'communication',
                        'teamwork': 'communication',
                        'writing': 'writing',
                        'design': 'design',
                        'data_analysis': 'data_analysis',
                        'presentation': 'presentation'
                    };
                    const mappedSkill = skillMapping[skill];
                    if (mappedSkill && responses.step2.skill_confidence[mappedSkill]) {
                        const skillScore = responses.step2.skill_confidence[mappedSkill];
                        skillBonus += skillScore * 2.64; // 스킬별 가중치 (22점 만점 조정)
                    }
                });
            }
            const finalSkillBonus = Math.round(Math.min(skillBonus, 22));
            score += finalSkillBonus;
            if (finalSkillBonus > 0) {
                explanations.push(`보유 스킬 일치도 (+${finalSkillBonus}점)`);
            }

            // 직무 이해도 보너스 (최대 15점) - 2순위 참고 요소
            let understandingBonus = 0;
            if (responses.step2?.job_understanding) {
                const jobUnderstandingMapping = {
                    // IT/개발 분야
                    'software_developer': 'software_dev',
                    'frontend_developer': 'software_dev',
                    'backend_developer': 'software_dev',
                    'mobile_developer': 'software_dev',
                    'ai_engineer': 'software_dev',
                    'devops_engineer': 'software_dev',
                    'security_specialist': 'software_dev',
                    'system_admin': 'software_dev',
                    'blockchain_developer': 'software_dev',
                    'quality_assurance': 'software_dev',
                    'vr_ar_developer': 'software_dev',
                    
                    // 데이터 분야
                    'data_scientist': 'data_analyst',
                    'data_analyst': 'data_analyst',
                    'business_analyst': 'business_analyst',
                    'financial_analyst': 'financial_analyst',
                    
                    // 마케팅 분야
                    'marketing_manager': 'marketing_manager',
                    'digital_marketer': 'marketing_manager',
                    'performance_marketer': 'marketing_manager',
                    'brand_manager': 'marketing_manager',
                    'growth_hacker': 'marketing_manager',
                    'cro_specialist': 'marketing_manager',
                    'sales_manager': 'marketing_manager',
                    'account_manager': 'marketing_manager',
                    'copywriter': 'marketing_manager',
                    'community_manager': 'marketing_manager',
                    
                    // 기획 분야
                    'product_manager': 'product_manager',
                    'product_owner': 'product_manager',
                    'project_manager': 'product_manager',
                    'scrum_master': 'product_manager',
                    'service_planner': 'product_manager',
                    'business_development': 'product_manager',
                    
                    // 컨설팅 분야
                    'consultant': 'consultant',
                    'hr_specialist': 'consultant',
                    'operations_manager': 'consultant',
                    'office_manager': 'consultant',
                    'sustainability_consultant': 'consultant',
                    'investment_banker': 'consultant',
                    'tax_accountant': 'consultant',
                    'lawyer': 'consultant',
                    'patent_attorney': 'consultant',
                    
                    // 디자인 분야
                    'ux_designer': 'designer',
                    'graphic_designer': 'designer',
                    'web_designer': 'designer',
                    'brand_designer': 'designer',
                    'motion_graphics': 'designer',
                    'game_designer': 'designer',
                    'video_editor': 'designer',
                    'photographer': 'designer',
                    
                    // 콘텐츠 분야
                    'content_creator': 'content_creator',
                    'youtube_creator': 'content_creator',
                    'influencer': 'content_creator',
                    'journalist': 'content_creator',
                    'podcast_producer': 'content_creator',
                    'streaming_producer': 'content_creator',
                    
                    // 교육 분야
                    'teacher': 'teacher',
                    'curriculum_designer': 'teacher',
                    'researcher': 'teacher',
                    'instructional_designer': 'teacher',
                    
                    // 특수 분야
                    'esports_manager': 'content_creator',
                    'pet_care_specialist': 'teacher',
                    'drone_operator': 'software_dev'
                };
                const understandingKey = jobUnderstandingMapping[jobId];
                if (understandingKey && responses.step2.job_understanding[understandingKey]) {
                    const understandingLevel = responses.step2.job_understanding[understandingKey];
                    // 이해도에 따른 차등 점수 부여 (15점 만점 조정)
                    if (understandingLevel >= 4) {
                        understandingBonus = 15; // 높은 이해도
                    } else if (understandingLevel === 3) {
                        understandingBonus = 9; // 보통 이해도
                    } else if (understandingLevel === 2) {
                        understandingBonus = 4; // 낮은 이해도
                    } else {
                        understandingBonus = 1; // 매우 낮은 이해도
                    }
                }
            }
            score += understandingBonus;
            if (understandingBonus > 0) {
                explanations.push(`직무 이해도 (+${understandingBonus}점)`);
            }

            // 가치관 일치도 보너스 (최대 8점) 
            let valuesBonus = 0;
            if (responses.step1?.values_priorities) {
                const topValues = responses.step1.values_priorities.slice(0, 3);
                const jobValueMapping = {
                    // IT/개발 분야
                    'software_developer': ['growth', 'autonomy', 'creativity'],
                    'frontend_developer': ['creativity', 'growth', 'autonomy'],
                    'backend_developer': ['growth', 'autonomy', 'stability'],
                    'mobile_developer': ['growth', 'creativity', 'autonomy'],
                    'data_scientist': ['growth', 'income', 'autonomy'],
                    'data_analyst': ['growth', 'stability', 'income'],
                    'ai_engineer': ['growth', 'income', 'creativity'],
                    'devops_engineer': ['growth', 'autonomy', 'stability'],
                    'security_specialist': ['stability', 'income', 'growth'],
                    'system_admin': ['stability', 'autonomy', 'growth'],
                    'blockchain_developer': ['growth', 'income', 'autonomy'],
                    'quality_assurance': ['stability', 'growth', 'work_life_balance'],
                    
                    // 비즈니스/마케팅
                    'marketing_manager': ['creativity', 'growth', 'social_impact'],
                    'digital_marketer': ['creativity', 'growth', 'income'],
                    'performance_marketer': ['growth', 'income', 'autonomy'],
                    'brand_manager': ['creativity', 'growth', 'autonomy'],
                    'business_analyst': ['growth', 'income', 'autonomy'],
                    'sales_manager': ['income', 'growth', 'social_impact'],
                    'account_manager': ['growth', 'income', 'social_impact'],
                    'business_development': ['growth', 'income', 'autonomy'],
                    'growth_hacker': ['growth', 'creativity', 'autonomy'],
                    'cro_specialist': ['growth', 'autonomy', 'creativity'],
                    
                    // 기획/제품 관리
                    'product_manager': ['growth', 'autonomy', 'income'],
                    'product_owner': ['growth', 'autonomy', 'creativity'],
                    'project_manager': ['stability', 'growth', 'work_life_balance'],
                    'scrum_master': ['stability', 'social_impact', 'work_life_balance'],
                    'service_planner': ['creativity', 'growth', 'autonomy'],
                    
                    // 디자인/크리에이티브
                    'ux_designer': ['creativity', 'growth', 'work_life_balance'],
                    'graphic_designer': ['creativity', 'autonomy', 'work_life_balance'],
                    'web_designer': ['creativity', 'autonomy', 'growth'],
                    'brand_designer': ['creativity', 'growth', 'autonomy'],
                    'motion_graphics': ['creativity', 'growth', 'autonomy'],
                    'game_designer': ['creativity', 'growth', 'autonomy'],
                    'video_editor': ['creativity', 'autonomy', 'work_life_balance'],
                    'photographer': ['creativity', 'autonomy', 'work_life_balance'],
                    
                    // 컨설팅/전문직
                    'consultant': ['income', 'growth', 'autonomy'],
                    'financial_analyst': ['income', 'stability', 'growth'],
                    'investment_banker': ['income', 'growth', 'stability'],
                    'tax_accountant': ['stability', 'income', 'autonomy'],
                    'lawyer': ['income', 'social_impact', 'stability'],
                    'patent_attorney': ['income', 'growth', 'autonomy'],
                    
                    // 교육/연구
                    'teacher': ['social_impact', 'stability', 'work_life_balance'],
                    'curriculum_designer': ['creativity', 'social_impact', 'growth'],
                    'researcher': ['growth', 'autonomy', 'social_impact'],
                    'instructional_designer': ['creativity', 'social_impact', 'growth'],
                    
                    // 인사/관리
                    'hr_specialist': ['social_impact', 'stability', 'work_life_balance'],
                    'operations_manager': ['stability', 'income', 'work_life_balance'],
                    'office_manager': ['stability', 'work_life_balance', 'social_impact'],
                    
                    // 미디어/콘텐츠
                    'content_creator': ['creativity', 'autonomy', 'growth'],
                    'youtube_creator': ['creativity', 'autonomy', 'growth'],
                    'influencer': ['creativity', 'autonomy', 'income'],
                    'copywriter': ['creativity', 'autonomy', 'growth'],
                    'journalist': ['social_impact', 'growth', 'autonomy'],
                    'podcast_producer': ['creativity', 'autonomy', 'work_life_balance'],
                    'streaming_producer': ['creativity', 'growth', 'income'],
                    'community_manager': ['social_impact', 'work_life_balance', 'growth'],
                    
                    // 신직업/특수 분야
                    'esports_manager': ['growth', 'creativity', 'income'],
                    'pet_care_specialist': ['social_impact', 'work_life_balance', 'autonomy'],
                    'vr_ar_developer': ['growth', 'creativity', 'income'],
                    'sustainability_consultant': ['social_impact', 'growth', 'autonomy'],
                    'drone_operator': ['autonomy', 'creativity', 'growth']
                };
                
                const jobValues = jobValueMapping[jobId] || [];
                topValues.forEach((value, index) => {
                    if (jobValues.includes(value)) {
                        valuesBonus += Math.max(3 - index, 1); // 순위별 가중치
                    }
                });
            }
            score += valuesBonus;
            if (valuesBonus > 0) {
                explanations.push(`가치관 일치도 (+${valuesBonus}점)`);
            }

            // 업무 환경 일치도 보너스 (최대 12점) - 3순위 보조 요소
            let environmentBonus = 0;
            if (responses.step1?.work_environment && job.work_environment) {
                const userPrefs = responses.step1.work_environment;
                const jobEnv = job.work_environment;
                
                // 각 환경 요소별로 일치도 계산
                Object.keys(jobEnv).forEach(envKey => {
                    if (userPrefs[envKey]) {
                        const userPref = userPrefs[envKey]; // 1-5점
                        const jobReq = jobEnv[envKey]; // 1-5점
                        
                        // 선호도와 직무 요구사항이 일치할수록 높은 점수 (12점 만점 조정)
                        const diff = Math.abs(userPref - jobReq);
                        if (diff === 0) {
                            environmentBonus += 2.4; // 완전 일치
                        } else if (diff === 1) {
                            environmentBonus += 1.6; // 거의 일치
                        } else if (diff === 2) {
                            environmentBonus += 0.8; // 부분 일치
                        }
                        // diff > 2는 점수 없음
                    }
                });
            }
            environmentBonus = Math.round(environmentBonus); // 정수로 반올림
            score += environmentBonus;
            if (environmentBonus > 0) {
                explanations.push(`업무 환경 일치도 (+${environmentBonus}점)`);
            }

            // 경험 부족 페널티 제거 (준비상황은 현재 상태일 뿐 적합도와 별개)

            // 최종 점수 (상한 없음)
            // 배점: 전공보너스(0-5) + RIASEC(25) + 스킬(22) + 이해도(15) + 관심분야(10) + 환경(12) + 가치관(8)
            // 최대 가능 점수: 5+25+22+15+10+12+8 = 97점
            const finalScore = score;
            
            jobScores[jobId] = finalScore;
            jobExplanations[jobId] = explanations;
        });

        const result = {
            riasecScores,
            jobScores,
            jobExplanations,
            topJobs: Object.entries(jobScores)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([jobId, score]) => ({ 
                    jobId, 
                    score, 
                    explanation: jobExplanations[jobId],
                    title: JOB_DATABASE[jobId]?.title || jobId,
                    ...JOB_DATABASE[jobId] 
                }))
                .filter(job => job.title) // title이 없는 직업 제외
        };
        
        console.log('ClientSideCalculation result:', result);
        console.log('RIASEC scores:', riasecScores);
        return result;
    }

    static async generateActionPlan(results, responses) {
        // Future: POST /api/assessment/action-plan
        const actionPlan = [];
        const urgency = responses.step3?.career_timeline || 'flexible';
        const preparationStatus = responses.step3?.preparation_status || [];
        const learningMethod = responses.step3?.learning_preference || 'online_course';
        const topJob = results.topJobs[0];
        
        // 우선순위 시스템: 1순위(최우선) → 2순위(중요) → 3순위(장기)
        
        // 특별 케이스: 시기를 정하지 못한 경우 (탐색 중심)
        if (urgency === 'flexible') {
            actionPlan.push({
                title: "진로 탐색 및 자기 이해",
                description: "다양한 직업과 업계를 탐색하고 자신에게 맞는 방향을 찾아보세요.",
                timeline: "1-2개월",
                priority: "1순위",
                priorityLabel: "🎯 탐색",
                reason: `아직 정확한 취업 시기를 정하지 못했다고 하셨습니다. 먼저 자신에게 맞는 진로 방향을 명확히 하는 것이 중요합니다.`,
                practicalTip: "업계별 현직자 인터뷰나 직업 체험 프로그램에 참여해보면 어떨까요? 실제 업무를 경험해보면 방향성을 찾는 데 도움이 될 것 같아요."
            });
            
            // 관심 분야 ID를 한글로 변환
            const industryMapping = {
                'technology': '기술/개발',
                'business_strategy': '경영/기획',
                'marketing_sales': '마케팅/영업',
                'creative_design': '디자인/창작',
                'finance': '금융/투자',
                'education_research': '교육/연구',
                'healthcare': '의료/헬스케어',
                'media_entertainment': '미디어/엔터테인먼트',
                'manufacturing': '제조/생산',
                'public_social': '공공/사회'
            };
            
            const industryId = responses.step2?.industry_interest?.[0];
            const industryText = industryMapping[industryId] || '선택하신 분야';
            
            actionPlan.push({
                title: "관심 분야 심화 탐구",
                description: `${industryText}에 대해 더 깊이 알아보세요.`,
                timeline: "1개월",
                priority: "1순위", 
                priorityLabel: "🎯 탐색",
                reason: `관심 분야로 선택하신 것들을 실제로 어떤 일인지 구체적으로 알아보는 시간이 필요합니다.`,
                practicalTip: "해당 분야의 유튜브 채널, 블로그, 커뮤니티를 찾아보면 어떨까요? 실제 업무 경험담을 들어보면 현실적인 감을 잡을 수 있을 것 같아요."
            });
            
            actionPlan.push({
                title: "구체적인 목표 시기 설정",
                description: "탐색 결과를 바탕으로 현실적인 취업 목표 시기를 정해보세요.",
                timeline: "2개월 후",
                priority: "2순위",
                priorityLabel: "📋 계획",
                reason: `진로 방향이 어느 정도 정해지면, 그에 맞는 준비 기간을 역산해서 목표 시기를 정하는 것이 좋습니다.`,
                practicalTip: "원하는 직업의 평균적인 준비 기간을 조사해보면 어떨까요? 그 정보를 바탕으로 현실적인 계획을 세울 수 있을 것 같아요."
            });
        }
        
        // 1순위: 긴급성 기반 액션 아이템 (시기가 정해진 경우)
        else if (urgency === '3months') {
            if (!preparationStatus.includes('resume')) {
                actionPlan.push({
                    title: "이력서 완성",
                    description: "3개월 이내 목표이므로 이력서를 즉시 완성하세요.",
                    timeline: "1주일",
                    priority: "1순위",
                    priorityLabel: "🚨 긴급",
                    reason: `취업 희망 시기를 '3개월 안'으로 선택하셨지만, 아직 이력서가 준비되지 않았다고 하셨습니다.`,
                    practicalTip: "채용공고 3-5개를 먼저 분석해보면 어떨까요? 그에 맞는 키워드를 이력서에 포함하면 면접 기회를 늘릴 수 있을 것 같아요."
                });
            }
            
            if (!preparationStatus.includes('interview_prep')) {
                actionPlan.push({
                    title: "면접 준비",
                    description: "단기 목표 달성을 위해 면접 연습이 필수입니다.",
                    timeline: "2주일",
                    priority: "1순위", 
                    priorityLabel: "🚨 긴급",
                    reason: `3개월 안에 취업하기를 원하시지만, 면접 연습을 아직 해보지 않았다고 하셨네요.`,
                    practicalTip: "기본 질문(자기소개, 지원동기)부터 준비하고, 거울 앞에서 연습해보면 어떨까요?"
                });
            }
        }

        // 2순위: 직무별 핵심 준비사항
        if (!preparationStatus.includes('portfolio') && topJob?.category !== "컨설팅") {
            const urgencyReason = urgency === '3months' ? '3개월 내 목표이시고, ' : urgency === '6months' ? '6개월 내 목표이시고, ' : '';
            actionPlan.push({
                title: "포트폴리오 구축",
                description: `${topJob?.title} 분야에 맞는 포트폴리오를 만들어보세요.`,
                timeline: urgency === '3months' ? "2주일" : "1-2개월",
                priority: urgency === '3months' ? "1순위" : "2순위",
                priorityLabel: urgency === '3months' ? "🚨 긴급" : "⏰ 우선",
                reason: `${urgencyReason}포트폴리오가 아직 준비되지 않았다고 하셨습니다. ${topJob?.title} 분야는 실무 능력을 보여주는 것이 중요합니다.`,
                practicalTip: "질보다 양으로 시작해보면 어떨까요? 작은 프로젝트 3개가 큰 프로젝트 1개보다 더 효과적일 것 같아요."
            });
        }
        
        if (!preparationStatus.includes('networking')) {
            // 관심 분야 ID를 한글 텍스트로 변환
            const industryMapping = {
                'technology': '기술/개발',
                'business_strategy': '경영/기획',
                'marketing_sales': '마케팅/영업',
                'creative_design': '디자인/창작',
                'finance': '금융/투자',
                'education_research': '교육/연구',
                'healthcare': '의료/헬스케어',
                'media_entertainment': '미디어/엔터테인먼트',
                'manufacturing': '제조/생산',
                'public_social': '공공/사회'
            };
            
            const industryId = responses.step2?.industry_interest?.[0];
            const industryInterest = industryMapping[industryId] || '관심분야';
            
            actionPlan.push({
                title: "네트워킹 활동",
                description: "업계 전문가들과의 연결고리를 만들어보세요.",
                timeline: "지속적",
                priority: "2순위",
                priorityLabel: "⏰ 우선", 
                reason: `'${industryInterest}' 분야에 관심을 보이셨지만, 업계 사람들과 아는 사이가 아니라고 하셨습니다.`,
                practicalTip: "링크드인이나 업계 모임에 참석해보면 어떨까요? 온라인 커뮤니티부터 시작하면 부담스럽지 않을 것 같아요."
            });
        }

        // 3순위: 장기적 스킬 개발 (학습 방법 선호도 반영)
        
        if (topJob && topJob.required_skills && Array.isArray(topJob.required_skills)) {
            topJob.required_skills.forEach(skill => {
                const skillNames = {
                    'coding': '프로그래밍 스킬',
                    'analysis': '데이터 분석 역량',
                    'communication': '커뮤니케이션 스킬',
                    'creativity': '창의적 사고력',
                    'planning': '기획 역량',
                    'technical': '기술 역량',
                    'design': '디자인 스킬',
                    'problem_solving': '문제해결 능력',
                    'user_research': '사용자 조사 역량'
                };
                
                const learningMethodDetails = {
                    'online_course': {
                        method: '온라인 강의',
                        description: '체계적인 커리큘럼으로 기초부터 단계별 학습',
                        platforms: 'Coursera, 인프런, 유데미 등'
                    },
                    'bootcamp': {
                        method: '부트캠프/학원',
                        description: '집중적인 실습과 멘토링으로 단기간 실력 향상',
                        platforms: '코드스쿠드, 패스트캠퍼스 등'
                    },
                    'mentoring': {
                        method: '멘토링/개인지도',
                        description: '1:1 맞춤형 지도로 개인 약점 집중 보완',
                        platforms: '크몽, 탈잉, 업계 전문가 네트워킹'
                    },
                    'self_study': {
                        method: '독학/책',
                        description: '자기주도적 학습으로 깊이 있는 이론을 습득',
                        platforms: '전문 서적, 공식 문서, 블로그'
                    },
                    'project_based': {
                        method: '실전 프로젝트',
                        description: '실무 프로젝트 경험으로 포트폴리오를 만들기',
                        platforms: '사이드 프로젝트, 오픈소스, 해커톤'
                    }
                };
                
                if (skillNames[skill]) {
                    const methodInfo = learningMethodDetails[learningMethod];
                    const skillTips = {
                        'coding': '매일 1시간씩 코딩하는 습관을 만들어보면 어떨까요? 꾸준히 하다 보면 실력이 눈에 띄게 향상될 것 같아요.',
                        'analysis': '실제 데이터를 구해서 분석해보면 어떨까요? 캐글이나 공공데이터를 활용하면 실무 경험을 쌓을 수 있을 것 같아요.',
                        'communication': '온라인 스터디나 발표 기회를 적극 찾아보면 어떨까요? 실제 경험을 통해서만 실력을 늘릴 수 있을 것 같아요.',
                        'creativity': '매일 새로운 것을 관찰하고 "왜?"라고 질문해보면 어떨까요? 호기심을 유지하면 창의력을 기를 수 있을 것 같아요.',
                        'planning': '개인 프로젝트부터 시작해서 기획서 작성 연습을 해보면 어떨까요? 작은 것부터 체계화하면 기획 역량을 키울 수 있을 것 같아요.',
                        'technical': '공식 문서 읽기를 습관화해보면 어떨까요? 직접 만들어보면서 익히면 깊이 있는 이해를 할 수 있을 것 같아요.',
                        'design': '매일 다른 디자인을 분석하고 따라 만들어보면 어떨까요? 모방을 통해 창의성을 기를 수 있을 것 같아요.',
                        'problem_solving': '어려운 문제를 작은 단위로 나누어 해결해보면 어떨까요? 단계별 접근을 통해 문제해결 능력을 향상시킬 수 있을 것 같아요.',
                        'user_research': '주변 사람들에게 자주 물어보고 의견을 수집해보면 어떨까요? 다양한 관점을 접하면 통찰력을 기를 수 있을 것 같아요.'
                    };
                    
                    // 스킬 자신감 확인
                    const skillConfidenceMapping = {
                        'coding': 'coding',
                        'analysis': 'analysis', 
                        'technical': 'technical',
                        'communication': 'communication',
                        'creativity': 'creativity',
                        'planning': 'planning',
                        'design': 'design',
                        'writing': 'writing',
                        'problem_solving': 'analysis', // 문제해결 능력은 분석/사고력으로 매핑
                        'user_research': 'analysis', // 사용자 조사는 분석/사고력으로 매핑
                        'data_analysis': 'data_analysis', // 데이터 분석은 직접 매핑
                        'presentation': 'presentation', // 발표는 직접 매핑
                        'teamwork': 'communication', // 팀워크는 커뮤니케이션으로 매핑
                        'leadership': 'communication' // 리더십은 커뮤니케이션으로 매핑
                    };
                    
                    const mappedSkillId = skillConfidenceMapping[skill];
                    const userSkillLevel = responses.step2?.skill_confidence?.[mappedSkillId];
                    
                    // 사용자가 실제로 응답한 스킬에 대해서만 액션 플랜 생성
                    if (userSkillLevel === undefined || userSkillLevel === null) {
                        return; // 응답하지 않은 스킬은 액션 플랜에서 제외
                    }
                    const learningMethodText = learningMethod === 'online_course' ? '온라인 강의' : 
                                            learningMethod === 'bootcamp' ? '부트캠프' :
                                            learningMethod === 'mentoring' ? '멘토링' :
                                            learningMethod === 'self_study' ? '독학/책' : '실전 프로젝트';
                    
                    actionPlan.push({
                        title: `${skillNames[skill]} 향상`,
                        description: `${topJob.title} 직무 필수 역량입니다. ${methodInfo.method}을 통해 ${methodInfo.description}하세요.`,
                        timeline: learningMethod === 'bootcamp' ? '3-6개월' : learningMethod === 'project_based' ? '2-4개월' : '2-3개월',
                        priority: "3순위",
                        priorityLabel: "👀 관심",
                        reason: `${topJob.title}에 필요한 ${skillNames[skill]}에 대해 자신감이 ${userSkillLevel}점이라고 하셨고, 학습방법으로 '${learningMethodText}'를 선호한다고 하셨습니다.`,
                        resources: methodInfo.platforms,
                        learning_method: methodInfo.method,
                        practicalTip: skillTips[skill] || '매일 조금씩이라도 꾸준히 연습해보면 어떨까요? 작은 노력의 누적이 큰 변화를 만들 수 있을 것 같아요.'
                    });
                }
            });
        }
        
        // 학습 방법별 추가 권장사항
        const generalLearningAdvice = {
            'online_course': {
                title: '온라인 학습 효율화 팁',
                description: '강의 노트 정리, 실습 프로젝트 병행, 학습 일정 관리로 완주율을 높이세요.',
                timeline: '지속적',
                priority: '3순위',
                priorityLabel: '👀 관심',
                reason: `학습 방법으로 '온라인 강의'를 선호한다고 하셨습니다. 온라인 학습의 효과를 극대화하기 위한 가이드입니다.`,
                practicalTip: '2배속 시청보다는 1.25배속으로 듣고 중요한 부분을 반복 학습하세요.'
            },
            'bootcamp': {
                title: '부트캠프 준비사항',
                description: '사전 기초 학습, 학습 시간 확보, 동기들과 네트워킹 준비를 하세요.',
                timeline: '입학 전 1개월',
                priority: '3순위',
                priorityLabel: '👀 관심',
                reason: `학습 방법으로 '부트캠프'를 선호한다고 하셨습니다. 부트캠프 수강 효과를 극대화하기 위한 준비사항입니다.`,
                practicalTip: '수강 전 해당 분야 기초 용어부터 공부하면 수업 이해도가 크게 높아집니다.'
            },
            'mentoring': {
                title: '멘토링을 최대한 활용하는 방법',
                description: '구체적인 질문 준비, 정기적인 피드백 요청, 업계 인사이트 습득에 집중하세요.',
                timeline: '멘토링 기간 내',
                priority: '3순위',
                priorityLabel: '👀 관심',
                reason: `학습 방법으로 '멘토링'을 선호한다고 하셨습니다. 멘토링의 효과를 극대화하기 위한 활용법입니다.`,
                practicalTip: '막연한 질문보다는 "A와 B 중 어느 것이 나을까요?" 같은 구체적 질문을 준비하세요.'
            },
            'self_study': {
                title: '독학 성공 전략',
                description: '학습 계획 수립, 온라인 커뮤니티 참여, 정기적인 진도 점검을 하세요.',
                timeline: '지속적',
                priority: '3순위',
                priorityLabel: '👀 관심',
                reason: `학습 방법으로 '독학/책'을 선호한다고 하셨습니다. 독학의 효과를 극대화하기 위한 전략입니다.`,
                practicalTip: '하루 1시간이라도 매일 하는 것이 주말에 몰아서 5시간 하는 것보다 효과적입니다.'
            },
            'project_based': {
                title: '프로젝트 기반 학습 가이드',
                description: '작은 프로젝트부터 시작, 코드 리뷰 요청, GitHub 포트폴리오를 관리하세요.',
                timeline: '각 프로젝트마다',
                priority: '3순위',
                priorityLabel: '👀 관심',
                reason: `학습 방법으로 '실전 프로젝트'를 선호한다고 하셨습니다. 프로젝트 기반 학습의 효과를 극대화하기 위한 가이드입니다.`,
                practicalTip: '완벽한 프로젝트 1개보다 80% 완성도 프로젝트 3개가 포트폴리오에 더 좋을 것 같아요.'
            }
        };
        
        if (generalLearningAdvice[learningMethod]) {
            actionPlan.push(generalLearningAdvice[learningMethod]);
        }

        // 우선순위별 정렬: 1순위 → 2순위 → 3순위 → 기타
        const priorityOrder = { '1순위': 1, '2순위': 2, '3순위': 3, '높음': 4, '보통': 5 };
        actionPlan.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

        return actionPlan;
    }
}