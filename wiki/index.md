# 🟦 wiki/ — 위키 진입점 (Index)

이 위키는 **LLM이 컴파일·유지**하는 지식 계층입니다 (Karpathy LLM Wiki 모델).
원본은 [`../sources/`](https://github.com/fabelian/math-learning-wiki/blob/main/sources/index.md)에 있고, 여기 페이지들은 그 원본을 정리한 결과입니다.

> 운영 규칙은 [`../CLAUDE.md`](https://github.com/fabelian/math-learning-wiki/blob/main/CLAUDE.md) 참조.
> 이 위키는 **과목별 네임스페이스**로 나뉩니다. 각 과목은 `wiki/{과목}/` 아래에 독립된 problems·concepts·mistakes·dashboard·exams를 가집니다.

---

## 📚 과목 (Subjects)

| 과목 | 진행 | 진입점 |
|------|------|--------|
| 🟦 **수학** | 미적분Ⅰ 진행 중 (문제 62개 컴파일) | [math/](math/dashboard/weakness-map.md) |
| 🟩 **물리** | 역학적 시스템 23문항(평형·돌림힘·운동법칙·에너지·탄성·충돌), 딸 채점 시작 | [physics/](physics/dashboard/weakness-map.md) |

> 새 과목을 추가하려면: `sources/{과목}/`, `wiki/{과목}/{problems,concepts,mistakes,dashboard,exams}/`를 만들고 이 표에 한 줄 추가.

공유 인프라(과목 무관): [활동 로그](log.md) · [템플릿](templates/) · [원본 카탈로그](https://github.com/fabelian/math-learning-wiki/blob/main/sources/index.md)

---

## 🟦 수학 (math)

| 영역 | 설명 | 링크 |
|------|------|------|
| 🧩 문제 페이지 | 원본 1개 = 컴파일된 페이지 1개 | [math/problems/](math/problems/README.md) |
| 📘 개념 엔티티 | 단원별 누적 지식 | [math/concepts/](math/concepts/README.md) |
| ❌ 오답 패턴 엔티티 | 반복 실수 유형 | [math/mistakes/](math/mistakes/README.md) |
| 🗺️ 약점 지도 | LLM이 재집계하는 롤업 | [math/dashboard/weakness-map.md](math/dashboard/weakness-map.md) |
| 📈 강점 리포트 | 누적 강점·기법 분석 | [math/dashboard/strength-report.md](math/dashboard/strength-report.md) |
| 📆 주간 리뷰 | 주간 회고 | [math/dashboard/weekly-review.md](math/dashboard/weekly-review.md) |
| 📝 시험 대비 | 범위별 컴파일 | [math/exams/](math/exams/README.md) |

### 📊 수학 현재 상태 (compile/lint 시 LLM이 갱신)

- **학습자 트랙:** 중3 / 학원 선행 **미적분Ⅰ 진행 중** (공통수학1·2, 대수 완료)
- **등록된 원본 수:** 6 (시작테스트 1·2·3·4차, 단원테스트, 진도확인테스트)
- **컴파일된 문제 수:** 62 (10+12+6+12+10+12) — 검증 **전부 정답** 👏👏👏
- **강한 단원:** 이차방정식(공통수학1), 함수의 극한·연속, 다항함수의 미분, 미분계수, 속도와 가속도
- **정답풀이(미채점):** 보류 11문항에 모범답안 페이지 생성
- **유일한 주의점:** 음수의 제곱근 부호 ($a,b<0$일 때 $\sqrt a\sqrt b=-\sqrt{ab}$)
- **확정 오답 원인:** 없음
- **마지막 lint:** 2026-06-08 — 끊긴 링크·고아·모순 없음. 개념 8종 백링크 정합성 갱신.

### 📚 중3 수학 단원 (개념 엔티티 대상)

1. 제곱근과 실수
2. 다항식의 곱셈과 인수분해
3. 이차방정식
4. 이차함수
5. 삼각비
6. 원의 성질
7. 통계 (대푯값·산포도·상관관계)
8. 피타고라스 정리

---

## 🟩 물리 (physics)

| 영역 | 설명 | 링크 |
|------|------|------|
| 🧩 문제 페이지 | 원본 1개 = 컴파일된 페이지 1개 | [physics/problems/](physics/problems/README.md) |
| 📘 개념 엔티티 | 단원별 누적 지식 | [physics/concepts/](physics/concepts/README.md) |
| ❌ 오답 패턴 엔티티 | 반복 실수 유형 | [physics/mistakes/](physics/mistakes/README.md) |
| 🗺️ 약점 지도 | LLM이 재집계하는 롤업 | [physics/dashboard/weakness-map.md](physics/dashboard/weakness-map.md) |

- **개념:** [힘과 힘의 평형](physics/concepts/힘의평형.md) · [돌림힘과 역학적 평형](physics/concepts/돌림힘과역학적평형.md) · [운동 법칙과 역학적 에너지](physics/concepts/운동법칙과역학적에너지.md) · [탄성력과 충돌](physics/concepts/탄성력과충돌.md)
- **진행:** 역학평형 12문항 + 운동법칙/에너지/탄성 11문항(q32~q56). **딸 채점 8/9 정답** 👏 (#48만 막힘).
- **주의:** 현재 페이지는 **정답·해설만** — 학생이 직접 푼 풀이를 넣으면 오답 원인·약점이 집계됩니다.

---

## 🔁 컴파일 사이클

```text
sources/{과목}/에 문제·풀이 투입(학생)
   → LLM compile (prompts/compile.md)
       → wiki/{과목}/problems/{id}.md 생성
       → wiki/{과목}/concepts/{단원}.md 갱신
       → wiki/{과목}/mistakes/{패턴}.md 갱신 (오답 시)
       → wiki/{과목}/dashboard/weakness-map.md 재집계
       → wiki/index.md · wiki/log.md 갱신
   → 주기적 LLM lint (prompts/lint.md): 모순·고아·끊긴 링크 점검
   → 질문은 query (prompts/query.md): 위키를 읽어 답
```
