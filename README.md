# InsideJob - 통합 커리어 진단 플랫폼

## 🎯 프로젝트 개요
커리어 진단 → 경쟁력 계산 → 자기소개서 작성을 하나의 플랫폼에서 제공하는 통합 커리어 솔루션

## 📦 프로젝트 구조

```
career-app-integrated/
├── index.html                 # 통합 메인 페이지 (탭 네비게이션)
├── diagnosis.html             # 커리어 진단기 (280개 직무 지원)
├── calculator.html            # 취업경쟁력 계산기 (3단계 평가)
├── toolkit.html               # 자기소개서 작성 툴킷
├── assets/                    # 커리어 진단기 리소스
│   ├── css/                   # 스타일시트
│   └── js/                    # JavaScript 파일
├── CLAUDE.md                  # 프로젝트 상세 문서
└── README.md                  # 이 파일
```

## 🚀 실행 방법

### 로컬 실행
```bash
# 1. Python 간이 서버
cd /home/knoww/career-app-integrated
python3 -m http.server 8080

# 2. 브라우저에서 접속
# http://localhost:8080
```

### GitHub Pages 배포
```bash
# 1. Git 저장소 초기화 (처음 1회만)
git init
git add .
git commit -m "Initial commit: InsideJob 통합 플랫폼"

# 2. GitHub 저장소 생성 후 연결
git remote add origin [YOUR_GITHUB_REPO_URL]
git branch -M main
git push -u origin main

# 3. GitHub 저장소 설정
# Settings → Pages → Source: main branch → Save
```

## 🎨 기능 구성

### 1️⃣ 커리어 진단기
- **280개 직무 지원**: KSCO + 워크넷 기반 체계적 직무 분류
- **3단계 진단**: 강점 발견 → 직무 매칭 → 취업 준비
- **RIASEC 분석**: 6가지 성향 기반 맞춤형 직무 추천
- **개인정보 동의**: 최초 1회 수집·이용 동의 필수

### 2️⃣ 취업경쟁력 계산기
- **6개 직무그룹별 평가**: 기술개발, 기획전략, 마케팅영업, 디자인, 경영지원, 전문직
- **3단계 평가 시스템**: 기본정보(35점) + 직무역량(35점) + 시장수용도(30점)
- **정원성장 메타포**: 긍정적 등급 시스템 (🌳전문가→🌰새싹)
- **맞춤형 개선 방향**: 부족한 영역별 구체적 가이드

### 3️⃣ 자기소개서 툴킷
- **6개 섹션 구성**: 기본정보, 지원목표, 경험목록, 강점체크, 자격증, 포트폴리오
- **경험 관리**: 무제한 경험 추가 및 상세 항목 작성
- **강점 분석**: 10가지 역량 중 최대 5개 선택 및 사례 연결
- **HTML 내보내기**: 작성 결과를 깔끔한 HTML 파일로 저장

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Tailwind CSS (CDN)
- **React**: React 18 (경쟁력 계산기용, CDN)
- **Chart**: Chart.js (커리어 진단기용)
- **Database**: Supabase (커리어 진단기 연동)
- **Icons**: Font Awesome 6

## 🌐 통합 방식

**iframe 기반 독립 서비스 통합**
- 각 서비스는 독립 HTML 파일로 유지
- 메인 index.html에서 탭 방식으로 전환
- 개인정보 동의는 전체 플랫폼 최초 1회만

## 📊 사용자 플로우

```
[개인정보 동의] → [커리어 진단] → [경쟁력 계산] → [자기소개서 작성]
     (최초 1회)      (280개 직무)     (100점 평가)     (6개 섹션)
```

## 🔐 개인정보 보호

- **로컬 저장**: 모든 데이터는 브라우저 localStorage에 저장
- **회원가입 불필요**: 별도 서버 저장 없음
- **동의 관리**: 최초 1회 개인정보 수집·이용 동의 필수
- **제3자 미제공**: 수집된 정보는 외부 제공 없음

## 📝 개발 이력

- **2025-10-10**: 프로젝트 기획 및 CLAUDE.md 작성
- **2025-10-13**: 취업경쟁력 계산기 완성 (95%)
- **2025-11-01**: 통합 플랫폼 구축 완료 (iframe 방식)

## 🎯 향후 계획

- [ ] 진단 → 계산 → 작성 데이터 연속성 구현
- [ ] 통합 결과 리포트 PDF 생성
- [ ] Supabase 통합 사용자 인증
- [ ] 모바일 앱 변환 (PWA)

## 👥 개발자

- **회사**: (주)오픈커넥트 (OpenConnect Co., Ltd.)
- **라이선스**: All rights reserved
- **문의**: insidejob@openconnect.kr

---

© 2025 OpenConnect Co., Ltd. All rights reserved.
