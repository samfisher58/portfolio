@echo off
echo Removing old node_modules and package-lock.json...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo Installing updated dependencies...
npm install

echo Dependencies updated successfully!
echo GSAP has been removed to prevent conflicts with Framer Motion.
pause