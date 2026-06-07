# 🟦 wiki/ — 위키 진입점 (Index)

이 위키는 **LLM이 컴파일·유지**하는 지식 계층입니다 (Karpathy LLM Wiki 모델).
원본은 [`../sources/`](../sources/index.md)에 있고, 여기 페이지들은 그 원본을 정리한 결과입니다.

> 운영 규칙은 [`../CLAUDE.md`](../CLAUDE.md) 참조.

---

## 🧭 카탈로그

| 영역 | 설명 | 링크 |
|------|------|------|
| 🧩 문제 페이지 | 원본 1개 = 컴파일된 페이지 1개 | [problems/](problems/README.md) |
| 📘 개념 엔티티 | 단원별 누적 지식 | [concepts/](concepts/README.md) |
| ❌ 오답 패턴 엔티티 | 반복 실수 유형 | [mistakes/](mistakes/README.md) |
| 🗺️ 약점 지도 | LLM이 재집계하는 롤업 | [dashboard/weakness-map.md](dashboard/weakness-map.md) |
| 📆 주간 리뷰 | 주간 회고 | [dashboard/weekly-review.md](dashboard/weekly-review.md) |
| 📝 시험 대비 | 범위별 컴파일 | [exams/](exams/README.md) |
| 🪵 활동 로그 | append-only 시간순 기록 | [log.md](log.md) |

---

## 📊 현재 상태 (compile/lint 시 LLM이 갱신)

- **등록된 원본 수:** 0
- **컴파일된 문제 수:** 0
- **가장 약한 단원:** _(데이터 없음)_
- **가장 잦은 오답 원인:** _(데이터 없음)_
- **마지막 lint:** _(없음)_

---

## 📚 중3 수학 단원 (개념 엔티티 대상)

1. 제곱근과 실수
2. 다항식의 곱셈과 인수분해
3. 이차방정식
4. 이차함수
5. 삼각비
6. 원의 성질
7. 통계 (대푯값·산포도·상관관계)
8. 피타고라스 정리

---

## 🔁 컴파일 사이클

```text
sources/에 문제·풀이 투입(학생)
   → LLM compile (prompts/compile.md)
       → problems/{id}.md 생성
       → concepts/{단원}.md 갱신
       → mistakes/{패턴}.md 갱신 (오답 시)
       → dashboard/weakness-map.md 재집계
       → index.md · log.md 갱신
   → 주기적 LLM lint (prompts/lint.md): 모순·고아·끊긴 링크 점검
   → 질문은 query (prompts/query.md): 위키를 읽어 답
```
