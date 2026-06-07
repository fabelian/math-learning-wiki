# 📝 exams/ — 시험 대비

누적된 문제·오답·약점 데이터를 **시험 범위 기준으로 재컴파일**하는 영역입니다.

---

## 📌 규칙

- 파일명: `YYYY-학기-시험명.md` (예: `2026-1학기-중간고사.md`)
- 형식: [`../templates/exam-review-template.md`](../templates/exam-review-template.md)
- 생성: [`prompts/exam-prep.md`](../../prompts/exam-prep.md) — 범위로 약점·오답을 필터링해 컴파일.

---

## 🗂️ 시험 목록

| 시험 | 범위 | 상태 | 결과 | 페이지 |
|------|------|------|------|--------|
| _예시_ | 제곱근~이차방정식 | 준비중 | - | `2026-1학기-중간고사.md` |

---

## 🧭 단계

1. **범위 확정** — 교과서/학교 공지.
2. **약점 추출** — [약점 지도](../dashboard/weakness-map.md)에서 범위 내 약점.
3. **오답 재풀이** — 범위 내 [문제 페이지](../problems/README.md)·[오답 패턴](../mistakes/README.md) 다시 풀기.
4. **유사 문제 보강** — [`generate-similar-problems.md`](../../prompts/generate-similar-problems.md).
5. **모의 점검** — 시간 재고 풀이.
6. **시험 후 회고** — 예측 vs 실제 비교, 다음 전략 갱신.

> 핵심: "처음부터 다시"가 아니라 **이미 컴파일된 약점 데이터를 범위로 필터링**하는 작업.
