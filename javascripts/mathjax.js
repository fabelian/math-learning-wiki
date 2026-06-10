// MathJax 설정 — pymdownx.arithmatex(generic) 출력을 실제 수식으로 렌더링
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Material for MkDocs 인스턴트 로딩 시에도 재렌더링
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  });
}
