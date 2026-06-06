# ⚙️ 스크립트 (Scripts)

반복 작업을 자동화하는 (선택적) 스크립트 모음입니다. 지금은 비어 있으며, 필요할 때 추가합니다.

---

## 🧰 추천 자동화 아이디어

| 스크립트 | 하는 일 | 우선순위 |
|----------|---------|----------|
| `new-daily.ps1` | 오늘 날짜로 daily 템플릿을 복사해 새 문서 생성 | ⭐⭐⭐ |
| `resize-images.ps1` | `images/`의 큰 사진을 1600px로 일괄 축소 | ⭐⭐ |
| `update-index.ps1` | daily/mistakes 인덱스 표 자동 갱신 | ⭐⭐ |
| `count-tags.ps1` | 오답 태그 빈도 집계 → 약점 지도 분포표 업데이트 | ⭐⭐⭐ |

---

## 📝 예시: 오늘 날짜로 일일 기록 만들기 (PowerShell)

> 아래는 참고용 예시입니다. 실제로 쓰려면 `new-daily.ps1`로 저장하세요.

```powershell
# new-daily.ps1
$date = Get-Date -Format "yyyy-MM-dd"
$template = "content/templates/daily-problem-template.md"
$target = "content/daily/$date.md"

if (Test-Path $target) {
    Write-Host "이미 존재합니다: $target"
} else {
    (Get-Content $template -Raw) -replace "YYYY-MM-DD", $date |
        Set-Content $target -Encoding utf8
    Write-Host "생성됨: $target"
}
```

실행:
```powershell
./scripts/new-daily.ps1
```

---

## 💡 메모
- 스크립트 없이 손으로 템플릿을 복사해도 위키는 잘 동작합니다.
- 자동화는 "매일 쓰다 보니 귀찮은 부분"이 생겼을 때 그때 추가하세요.
