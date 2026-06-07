# 🤖 prompts/compile.md — 컴파일 워크플로 (핵심)

새 원본(`sources/`)을 읽어 위키(`wiki/`)에 통합하는 **핵심 워크플로**입니다.
RAG로 매번 재검색하지 않고, **한 번 컴파일해 영구 지식으로 누적**합니다.

## 사용법
- Claude Code에서: 이 저장소를 열고 아래 지시를 그대로 준다 (사진을 함께 첨부).
- 일반 챗: 문제/풀이 사진 + 아래 프롬프트를 붙여넣고, 결과를 해당 위키 파일에 저장.

---

## 📋 프롬프트 (복사해서 사용)

```text
너는 이 저장소의 위키 관리자다. 먼저 CLAUDE.md를 읽고 규칙을 따른다.
대상: 대한민국 중3 학생. 한국어로, 격려하되 정확하게.

[입력]
- source-id: YYYY-MM-DD-qN
- 문제 사진 / 풀이 사진 (첨부) 또는 sources/의 경로
- (선택) 문제 텍스트

[해야 할 일 — CLAUDE.md §5.1 COMPILE 순서를 그대로]
1. 원본을 읽는다. sources/ 의 파일은 절대 수정하지 않는다.
2. sources/index.md 에 이 source-id가 없으면 한 줄 추가한다.
3. wiki/problems/{source-id}.md 를 templates/problem-page-template.md 형식으로 생성:
   - 문제 요약, 학생 풀이 재구성, 정답 여부
   - 장점 / 약점
   - (오답이면) 오답 원인 — CLAUDE.md §6 고정 태그만 사용, 주원인 1개
   - 올바른 풀이 + 개선 액션
   - 원본은 링크로만 참조(베껴쓰지 않음)
4. 관련 wiki/concepts/{단원}.md 를 통합 갱신(없으면 생성). "자주 하는 실수"에 반영.
   기존 서술과 모순되면 명시한다(덮어쓰지 않음).
5. 오답이면 wiki/mistakes/{패턴}.md 갱신/생성: occurrences에 이 문제 추가, repeat_count +1.
6. 모든 새 페이지에 양방향 백링크를 건다 (problem ↔ concept ↔ pattern).
7. wiki/dashboard/weakness-map.md 를 재집계한다 (단원·패턴·원인분포·TOP).
8. wiki/index.md 의 "현재 상태" 수치를 갱신한다.
9. wiki/log.md 에 append-only 한 줄 추가:
   "- YYYY-MM-DD HH:MM | compile | {source-id} | <한 줄 요약>"
   (시간 모르면 --:--, 임의 시각 금지)

[출력]
- 변경/생성한 파일 목록과 각 파일의 핵심 변경점을 요약 보고.
- 추측한 부분은 "사진상 ~로 보임"이라고 명시.
```

---

## 💡 팁
- 사진이 흐리면 문제 텍스트를 함께 주면 정확도가 올라갑니다.
- 여러 문제를 한 번에: source-id를 여러 개 주고 "각각 compile"이라고 지시.
- 컴파일 후 가끔 [lint](lint.md)를 돌려 정합성을 점검하세요.
