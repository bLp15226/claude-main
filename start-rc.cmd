@echo off
REM Start Claude Code Remote Control for this project.
REM Double-click before leaving the desktop, then pick this computer
REM in the Claude phone app's Code tab. Leave this window OPEN.
cd /d "%~dp0"
echo Starting Remote Control in %CD%
echo Leave this window open. Press Ctrl+C to stop.
echo.
claude rc
pause
