# 🔄 워크플로 (Workflow)

Karpathy LLM Wiki 모델에서 이 위키를 운영하는 방법입니다.
핵심: **사람은 원본을 넣고 질문하고, LLM은 위키를 컴파일·유지한다.** (규칙: [`../CLAUDE.md`](../CLAUDE.md))

---

## 🌅 매일 (10분)

```text
1. 학생: 문제 풀기 → 문제/풀이 사진 촬영
2. 학생: sources/{과목}/YYYY/MM/ 에 저장  (과목 = math · physics …)
   - 문제: {source-id}.jpg   풀이: {source-id}-sol.jpg
   - source-id = YYYY-MM-DD-qN
3. LLM(compile): prompts/compile.md 실행 (해당 과목 네임스페이스 안에서)
   → wiki/{과목}/problems/{id}.md 생성
   → wiki/{과목}/concepts/{단원}.md 통합 갱신
   → (오답) wiki/{과목}/mistakes/{패턴}.md 갱신
   → wiki/{과목}/dashboard/weakness-map.md 재집계
   → wiki/index.md · wiki/log.md 갱신
```

### 흐름도
```text
[문제] → [사진] → sources/{과목}/ (불변)
                      │  compile
                      ▼
   wiki/{과목}/problems ── concepts ── mistakes
                      \      |      /
                       weakness-map (집계) → index/log 갱신
```

---

## 📆 주간 (20분)

```text
1. LLM(query 주간모드): prompts/query.md → wiki/{과목}/dashboard/weekly-review.md 작성
2. LLM(lint): prompts/lint.md → 모순·고아·끊긴 링크·오래된 약점 점검·수정
3. 다음 주 목표 3개 이하 설정
```

---

## 📝 시험 대비 (2~3주 전)

```text
1. 범위 확정
2. LLM(exam-prep): prompts/exam-prep.md → wiki/{과목}/exams/{시험}.md 컴파일
   (범위 내 약점·오답 필터링 + 예상 문제)
3. 범위 오답 재풀이 → sources/{과목}/에 넣고 compile (호전 추적)
4. 모의 점검(시간 재기)
5. 시험 후: "시험 후 회고"에 예측 vs 실제 기록
```

---

## 🤖 Claude Code로 운영하기 (권장)

이 저장소를 Claude Code에서 열면 `CLAUDE.md`가 자동 로드됩니다. 예:
- "sources/math/2026/06/2026-06-07-q1 을 compile 해줘"  (물리는 sources/physics/…)
- "위키 lint 해줘"
- "이번 달 가장 약한 단원이 뭐야?" (query)

LLM이 규칙대로 위키를 갱신하고 변경 내역을 보고합니다.

---

## 🌐 배포 (GitHub Pages)

### 옵션 A — Jekyll (무설정)
Settings → Pages → Source: `main` 브랜치, 폴더 `/wiki`.

### 옵션 B — MkDocs Material (추천: 검색·네비)
```bash
pip install mkdocs-material
mkdocs serve        # 로컬 미리보기 (docs_dir: wiki)
mkdocs gh-deploy    # 배포
```
> `sources/`(원본)는 보통 배포에서 제외하고, `wiki/`만 공개 위키로 배포합니다.

---

## ✅ 원칙

- **완벽보다 꾸준함** — 하루 한 문제라도 compile.
- **원본은 불변** — 고치지 말고 새 source 추가.
- **LLM이 grunt work** — 사람은 풀이·질문·전략에 집중.
- **자주 lint** — 위키가 커지기 전에 정합성 유지.
