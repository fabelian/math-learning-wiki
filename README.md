# 📐 Math Learning Wiki (중3 수학 학습 위키)

> 매일 푸는 수학 문제와 풀이를 기록하고, LLM 분석을 축적하여
> **"어떻게 생각했고, 어디서 막혔고, 무엇을 반복해서 틀리는가"** 를 추적하는 개인 학습 플랫폼

이 저장소는 단순한 문제 저장소가 아닙니다.
학생의 **사고 과정 → 풀이 → 오답 원인 → 개선 방향 → 시험 대비**까지
하나의 흐름으로 연결되는 학습 데이터베이스입니다.

---

## 🎯 이 위키가 하는 일

| 기능 | 설명 |
|------|------|
| 📅 매일 문제 기록 | 하루에 푼 문제와 풀이를 날짜별로 저장 |
| 🖼️ 사진 관리 | 문제 사진 / 풀이 사진을 `images/`에 보관 |
| 🤖 LLM 풀이 분석 | 풀이의 장점·약점·오답 원인을 구조화된 형식으로 기록 |
| ❌ 오답 원인 분류 | 계산 실수 / 개념 부족 / 문제 해석 오류 등으로 태깅 |
| 📊 단원별 약점 정리 | `weakness-map.md`에 단원별 약점을 누적 추적 |
| ♻️ 유사 문제 생성 | 틀린 유형과 비슷한 문제를 만들어 반복 학습 |
| 📝 시험 대비 | 중간·기말고사 대비 자료를 누적 데이터로 생성 |
| 🌐 GitHub Pages 배포 | Markdown 기반으로 웹 위키 배포 가능 |

---

## 📂 디렉터리 구조

```text
math-learning-wiki/
├─ content/                # 학습 콘텐츠 (위키 본문)
│  ├─ index.md             # 위키 메인 페이지
│  ├─ daily/               # 날짜별 문제 풀이 기록
│  ├─ mistakes/            # 오답 분석 모음
│  ├─ concepts/            # 단원·개념 노트
│  ├─ exams/               # 시험 대비 자료
│  ├─ templates/           # 새 문서를 만들 때 복사할 템플릿
│  └─ dashboard/           # 약점 지도 / 주간 리뷰 (한눈에 보기)
├─ images/                 # 문제·풀이 사진 저장소
├─ prompts/                # LLM에게 줄 표준 프롬프트 모음
├─ scripts/                # 자동화 스크립트 (선택)
├─ docs/                   # 워크플로 / 개인정보 정책
└─ README.md               # (이 파일)
```

---

## 🚀 빠른 시작 (하루 루틴)

1. **사진 저장** — 문제/풀이 사진을 `images/YYYY/MM/`에 넣는다.
2. **문서 생성** — `content/templates/daily-problem-template.md`를 복사해
   `content/daily/YYYY-MM-DD.md`로 저장한다.
3. **LLM 분석** — `prompts/analyze-solution.md` 프롬프트에 사진을 넣어 분석을 받는다.
4. **결과 기록** — 분석 결과를 daily 문서에 채운다.
5. **약점 갱신** — 새로 발견한 약점을 `content/dashboard/weakness-map.md`에 반영한다.

> 자세한 절차는 [`docs/workflow.md`](docs/workflow.md) 참고.

---

## 🌐 GitHub Pages 배포

이 위키는 순수 Markdown 구조라 여러 방식으로 배포할 수 있습니다.

- **가장 간단:** 저장소 Settings → Pages → Source를 `main` 브랜치 `/content` 또는 `/docs`로 지정 (Jekyll 자동 렌더링)
- **추천:** [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 또는 Docusaurus로 `content/`를 빌드해 검색·네비게이션이 있는 위키로 배포
- 사진은 `images/`에 두고 Markdown에서 상대경로로 참조

배포 옵션 비교는 [`docs/workflow.md`](docs/workflow.md)의 "배포" 섹션 참고.

---

## 🔒 개인정보 보호

학생(미성년자)의 학습 데이터를 다루므로 주의가 필요합니다.
- 실명·학교·연락처 등 식별정보는 기록하지 않습니다.
- 사진에 이름표·이름이 보이면 가립니다.
- **저장소는 Private 으로 두는 것을 강력히 권장합니다.**

자세한 내용은 [`docs/privacy.md`](docs/privacy.md) 참고.

---

## 🧭 시작 지점

- 📖 [위키 메인 (content/index.md)](content/index.md)
- 🗺️ [약점 지도 (weakness-map)](content/dashboard/weakness-map.md)
- 📆 [주간 리뷰 (weekly-review)](content/dashboard/weekly-review.md)
