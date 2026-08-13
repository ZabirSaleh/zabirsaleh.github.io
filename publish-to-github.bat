@echo off
echo.
echo Zabir Portfolio - GitHub Pages Publisher
echo ----------------------------------------
echo Edit this file and replace ZabirSaleh before running it.
echo.
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/ZabirSaleh/ZabirSaleh.github.io.git
git push -u origin main
pause
