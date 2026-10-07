$source = "C:\Users\Hetansh\Desktop\Felix"
$destZip = "C:\Users\Hetansh\Desktop\FELIX SOLUTION_HB.zip"
$destFolder = "C:\Users\Hetansh\Desktop\FELIX SOLUTION_HB"
$tempDir = "C:\Users\Hetansh\Desktop\FELIX_TEMP_BUILD"

if (Test-Path $destZip) { Remove-Item $destZip -Force }
if (Test-Path $destFolder) { Remove-Item $destFolder -Recurse -Force }
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }

New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

Copy-Item -Path "$source\app" -Destination "$tempDir\app" -Recurse
Copy-Item -Path "$source\components" -Destination "$tempDir\components" -Recurse
Copy-Item -Path "$source\data" -Destination "$tempDir\data" -Recurse
Copy-Item -Path "$source\public" -Destination "$tempDir\public" -Recurse

Get-ChildItem -Path $source -File | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $tempDir -Force
}

Compress-Archive -Path "$tempDir\*" -DestinationPath $destZip -Force
Copy-Item -Path $destZip -Destination "$destFolder\FELIX SOLUTION_HB.zip" -Force
Remove-Item $tempDir -Recurse -Force

Write-Host "ZIP_SUCCESSFULLY_CREATED"
