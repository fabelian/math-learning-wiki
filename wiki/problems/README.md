# 🧩 problems/ — 문제 페이지

**원본(source) 1개 = 컴파일된 문제 페이지 1개.** compile 워크플로가 생성·유지합니다.

---

## 📌 규칙

- 파일명: `{source-id}.md` (예: `2026-06-07-q1.md`) — [sources](../../sources/index.md)의 id와 1:1.
- 새 페이지는 [`../templates/problem-page-template.md`](../templates/problem-page-template.md) 형식.
- 원본은 **링크로 참조만** 한다(사진 경로). 원본 내용을 위키에 베껴 쓰지 않는다.
- 반드시 관련 [개념](../concepts/README.md)·[오답 패턴](../mistakes/README.md)으로 **양방향 백링크**.

## 🗂️ 문제 인덱스

> compile 시 한 줄씩 추가 (최신순).

| source-id | 단원 | 결과 | 주원인 | 페이지 |
|-----------|------|------|--------|--------|
| _예시_ | 이차방정식 | 오답 | `#계산실수` | [2026-06-07-q1](EXAMPLE-2026-06-07-q1.md) |

---

## 📎 참고

이 페이지들은 LLM이 원본을 **컴파일**한 결과입니다. 사람이 직접 고치기보다는,
원본을 추가하고 compile을 다시 돌리는 흐름을 권장합니다 ([CLAUDE.md §5.1](../../CLAUDE.md)).
