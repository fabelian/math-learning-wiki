# 🔄 워크플로 (Workflow)

이 위키를 매일·매주 어떻게 운영하는지에 대한 안내서입니다.

---

## 🌅 매일 루틴 (10~15분)

```text
1. 문제 풀기 (학생)
2. 사진 촬영 → images/YYYY/MM/ 에 규칙대로 저장
3. daily 문서 생성
   - templates/daily-problem-template.md 복사 → content/daily/YYYY-MM-DD.md
   - 문제/풀이 사진 삽입, "나의 사고 과정" 작성
4. LLM 분석
   - prompts/analyze-solution.md 프롬프트 + 사진 → 분석 받기
   - 결과를 daily 문서의 "LLM 분석" 칸에 붙여넣기
5. 틀린 문제 처리
   - mistakes 문서 생성 (mistake-analysis-template.md)
   - 오답 원인 태그 부여
6. 약점 지도 갱신
   - dashboard/weakness-map.md 에 반영 (반복 +1 등)
7. daily 인덱스 표에 한 줄 추가
```

### 흐름도
```text
[문제] → [사진] → [daily 작성] → [LLM 분석]
                                      │
                       정답 ─────────┤
                                      │
                       오답 → [mistakes] → [weakness-map] → [유사문제]
```

---

## 📆 주간 루틴 (주 1회, 20분)

```text
1. 그 주 daily 문서 모으기
2. prompts/weekly-review.md 로 LLM 회고 받기
3. dashboard/weekly-review.md 에 기록
4. weakness-map.md 의 오답 원인 분포 숫자 갱신
5. index.md 상단 "현재 상태" 수치 갱신
6. 다음 주 목표 3개 이하로 설정
```

---

## 📝 시험 대비 루틴 (시험 2~3주 전)

```text
1. exams 문서 생성 (exam-review-template.md)
2. 시험 범위 확정
3. weakness-map 에서 범위 내 약점 추출
4. prompts/exam-prep.md 로 대비 계획 + 예상 문제 생성
5. 범위 내 오답 재풀이 + 유사 문제 풀이
6. 모의 점검 (시간 재기)
7. 시험 후: "시험 후 회고" 작성 (예측 vs 실제)
```

---

## 🌐 배포 (GitHub Pages)

이 위키는 순수 Markdown이라 여러 방법으로 웹에 띄울 수 있습니다.

### 옵션 A — Jekyll (가장 간단, 무설정)
1. GitHub 저장소 → **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main`, Folder: `/content` (또는 `/docs`)
4. 몇 분 뒤 `https://<사용자>.github.io/math-learning-wiki/` 접속

### 옵션 B — MkDocs Material (추천: 검색·네비게이션)
1. 로컬에 설치: `pip install mkdocs-material`
2. 저장소 루트에 `mkdocs.yml` 작성 (예시는 저장소에 포함)
3. 로컬 미리보기: `mkdocs serve`
4. 배포: `mkdocs gh-deploy` (gh-pages 브랜치 자동 생성)

### 옵션 C — Docusaurus / Obsidian Publish
- 더 풍부한 기능이 필요하면 고려. 초기 설정 비용이 큼.

> 처음에는 **옵션 A**로 시작하고, 문서가 쌓여 검색이 필요해지면 **옵션 B**로 옮기는 것을 추천합니다.

---

## ✅ 운영 원칙

- **완벽보다 꾸준함.** 하루 한 문제라도 기록이 쌓이는 게 핵심.
- **결과보다 과정.** "왜 그렇게 풀었나"가 가장 중요한 데이터.
- **오답은 자산.** 약점 지도가 두꺼워질수록 공부가 효율적이 된다.
