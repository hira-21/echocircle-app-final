#!/usr/bin/env sh

# -----------------------------------------------------------------------------
# Gradle start up script for UN*X
# -----------------------------------------------------------------------------

# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS="-Xmx64m -Xms64m"

APP_BASE_NAME=$(basename "$0")
APP_HOME=$(dirname "$0")

# Use the maximum available, or set MAX_FD != -1 to use that value
MAX_FD=maximum

warn () {
    echo "$*"
}

die () {
    echo
    echo "$*"
    exit 1
}

# Find java
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/bin/java" ] ; then
        JAVA="$JAVA_HOME/bin/java"
    else
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME"
    fi
else
    JAVA=$(which java)
    [ -x "$JAVA" ] || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH."
fi
