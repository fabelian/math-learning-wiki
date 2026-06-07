# ⚙️ 스크립트 (Scripts)

반복 작업 자동화용(선택). 핵심 컴파일은 LLM이 하므로, 스크립트는 보조 역할입니다.

---

## 🧰 추천 자동화

| 스크립트 | 하는 일 | 우선순위 |
|----------|---------|----------|
| `resize-images.ps1` | `sources/`의 큰 사진을 1600px로 축소 + EXIF 제거 | ⭐⭐⭐ |
| `new-source.ps1` | 오늘 날짜 source-id 폴더/자리 만들기 | ⭐⭐ |
| `check-links.ps1` | wiki 내부 상대링크 깨짐 점검 (lint 보조) | ⭐⭐ |

> 집계·교차참조·정합성 점검은 스크립트 대신 [compile](../prompts/compile.md)/[lint](../prompts/lint.md) LLM 워크플로가 담당합니다.

---

## 📝 예시: source 자리 만들기 (PowerShell)

```powershell
# new-source.ps1
$date = Get-Date -Format "yyyy-MM-dd"
$dir = "sources/$((Get-Date -Format 'yyyy/MM'))"
New-Item -ItemType Directory -Force $dir | Out-Null
Write-Host "오늘 원본 폴더: $dir"
Write-Host "사진을 {$date-q1}.jpg / {$date-q1-sol}.jpg 형식으로 저장하세요."
```

## 📝 예시: 내부 링크 점검 (lint 보조)

```powershell
# check-links.ps1 — wiki/ 의 상대 마크다운 링크가 실제 파일을 가리키는지 확인
Get-ChildItem -Recurse -File -Filter *.md wiki | ForEach-Object {
    $dir = $_.DirectoryName
    (Select-String -Path $_.FullName -Pattern '\]\(([^)]+)\)' -AllMatches).Matches |
      ForEach-Object { $_.Groups[1].Value } |
      Where-Object { $_ -notmatch '^(https?:|#|mailto:)' } |
      ForEach-Object {
        $p = ($_ -split '#')[0]
        if ($p -and -not (Test-Path (Join-Path $dir $p))) { "$($_): 깨진 링크 -> $p" }
      }
}
```

---

## 💡 메모
- 스크립트 없이도 위키는 동작합니다. 귀찮은 부분이 생기면 그때 추가하세요.
