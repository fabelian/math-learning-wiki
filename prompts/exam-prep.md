# 🤖 prompts/exam-prep.md — 시험 대비 자료 생성

누적된 오답·약점 데이터를 **시험 범위 기준으로 재컴파일**해 맞춤 대비 자료를 만듭니다.

## 사용법
1. 시험 범위를 확정한다.
2. 범위에 해당하는 [약점 지도](../wiki/dashboard/weakness-map.md)·[오답 패턴](../wiki/mistakes/README.md)을 모은다.
3. 아래 프롬프트로 대비 계획 + 예상 문제를 생성한다.
4. 결과를 [`wiki/exams/`](../wiki/exams/README.md)에 정리한다.

---

## 📋 프롬프트 (복사해서 사용)

```text
너는 이 저장소의 위키 관리자 겸 중3 수학 시험 코치다. CLAUDE.md를 먼저 읽는다.
아래 시험 정보로 맞춤 대비 자료를 만들어 wiki/exams/{시험}.md에 저장한다.

[시험 정보]
- 시험명 / 시험일 / 범위(단원):

[해야 할 일]
1. wiki/ 에서 범위에 해당하는 약점·오답 패턴·문제를 추린다(재검색 X, 위키 직접 읽기).
2. templates/exam-review-template.md 형식으로 작성:
   - 범위 분석 & 예상 비중
   - 날짜별 학습 플랜
   - 약점 집중 공략 포인트(오답 패턴 기반)
   - 예상 문제 8~12개(난이도별, 정답·풀이는 <details>로 접기)
   - 시험 직전 체크리스트
3. wiki/log.md에 "exam | {시험} | 대비자료 생성" 한 줄 기록.

학생이 약한 유형 위주로, 격려하되 정확하게.
```

---

## 💡 팁
- 시험 후 [`exam-review-template.md`](../wiki/templates/exam-review-template.md)의 "시험 후 회고"를 채워
  예측 vs 실제를 비교하세요 — 다음 시험 전략의 최고의 재료입니다.
