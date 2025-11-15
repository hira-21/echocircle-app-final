@echo off

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar

if not "%JAVA_HOME%" == "" goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% == 0 goto execute
echo JAVA_HOME is not set and no java executable found in PATH.
goto fail

:findJavaFromJavaHome
set JAVA_EXE=%JAVA_HOME%\bin\java.exe

if exist "%JAVA_EXE%" goto execute
echo JAVA_HOME is set to an invalid directory: %JAVA_HOME%
goto fail

:execute
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*
goto eof

:fail
echo Failed to start Gradle.
exit /b 1

:eof
rem End of file
