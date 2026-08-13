@echo off
echo.
echo Zabir Portfolio - GitHub Pages Publisher
echo ----------------------------------------
echo Edit this file and replace YOUR_GITHUB_USERNAME before running it.
echo.
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
pause
