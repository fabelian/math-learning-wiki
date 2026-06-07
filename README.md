# 📐 Math Learning Wiki (중3 수학 LLM 위키)

> **Karpathy의 LLM Wiki 모델**로 설계된 개인 학습 지식베이스.
> 학생이 문제·풀이 원본을 넣으면, **LLM이 그것을 구조화된 위키로 컴파일**하고
> 교차참조·약점 집계·정합성 점검을 스스로 유지합니다. RAG로 매번 재검색하지 않고,
> **한 번 컴파일해 영구 지식으로 누적**합니다.

---

## 🧱 3계층 아키텍처

| 계층 | 디렉터리 | 소유자 | 역할 |
|------|----------|--------|------|
| **Raw Sources** | [`sources/`](sources/README.md) | 학생 | 문제·풀이 원본. **불변** — LLM은 읽기만. 진실의 원천. |
| **Wiki** | [`wiki/`](wiki/index.md) | **LLM** | 컴파일된 지식 페이지. LLM이 생성·갱신·교차참조·집계. |
| **Schema** | [`CLAUDE.md`](CLAUDE.md) | 사람 | 위키의 운영 규칙. LLM의 행동 지침. |

> 이 구조의 핵심 혁신은 [`CLAUDE.md`](CLAUDE.md)입니다 — LLM을 "규율 있는 위키 관리자"로 만드는 설정 문서.

---

## 📂 구조

```text
math-learning-wiki/
├─ CLAUDE.md            # ⭐ 스키마 (위키 운영체제)
├─ sources/             # ⬛ RAW (불변): 문제·풀이 원본 + index.md
├─ wiki/                # 🟦 LLM 소유: 컴파일된 지식
│  ├─ index.md          #   진입점(카탈로그)
│  ├─ log.md            #   append-only 활동 로그
│  ├─ problems/         #   문제 1개 = 페이지 1개
│  ├─ concepts/         #   단원 = 누적 엔티티
│  ├─ mistakes/         #   반복 오답 = 패턴 엔티티
│  ├─ dashboard/        #   약점 지도 / 주간 리뷰 (집계)
│  ├─ exams/            #   시험 대비
│  └─ templates/        #   페이지 표준 형식
├─ prompts/             # compile · lint · query · 유사문제 · 시험
├─ docs/                # workflow · privacy
└─ scripts/             # (선택) 자동화
```

---

## 🔄 핵심 워크플로 (prompts/)

| 워크플로 | 하는 일 | 프롬프트 |
|----------|---------|----------|
| **COMPILE** | 새 원본 → 위키 통합(문제·개념·패턴·집계·로그 갱신) | [compile.md](prompts/compile.md) |
| **LINT** | 모순·고아·끊긴 링크·오래된 주장·공백 점검 | [lint.md](prompts/lint.md) |
| **QUERY** | 위키를 읽어 질문 답변 / 주간 리뷰 | [query.md](prompts/query.md) |
| 유사 문제 | 약점 패턴 기반 문제 생성 | [generate-similar-problems.md](prompts/generate-similar-problems.md) |
| 시험 대비 | 범위로 약점 필터링 → 대비 자료 | [exam-prep.md](prompts/exam-prep.md) |

---

## 🚀 하루 흐름

```text
1. 문제 풀기 → 사진 촬영
2. sources/YYYY/MM/ 에 {source-id} 규칙으로 저장
3. Claude Code로 compile 실행 (prompts/compile.md)
   → LLM이 wiki/problems·concepts·mistakes·weakness-map·log 자동 갱신
4. (주기) lint로 정합성 점검
5. 궁금하면 query로 위키에 질문
```

> Claude Code에서 이 저장소를 열면, `CLAUDE.md`를 읽고 위 워크플로를 그대로 수행할 수 있습니다.

---

## 🌐 GitHub Pages 배포

순수 Markdown이라 그대로 배포 가능. 자세히는 [`docs/workflow.md`](docs/workflow.md).
- 간단: Settings → Pages → `wiki/` 폴더
- 추천: `mkdocs serve` / `mkdocs gh-deploy` (`mkdocs.yml` 포함, `docs_dir: wiki`)

## 🔒 개인정보

미성년자 데이터입니다. 실명·학교·연락처 금지, 사진 식별정보 가리기,
**저장소 Private 강력 권장.** → [`docs/privacy.md`](docs/privacy.md)

## 🧭 시작 지점
- 🟦 [위키 진입점 (wiki/index.md)](wiki/index.md)
- ⭐ [스키마 (CLAUDE.md)](CLAUDE.md)
- 🗺️ [약점 지도](wiki/dashboard/weakness-map.md)
