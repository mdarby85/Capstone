#!/bin/sh

# Based on configuration scripts found at: https://github.com/STUkh/gatsby-strapi-docker/
# 
# Author(s): Mario Arturo Lopez Martinez
# File: strapi/strapi.sh
# Last Modified: February 10th, 2020

# Command stops the a script from executing if a command or pipeline runs into an error.
set -ea

# Function to stop and wait until strapi process has been terminated
_stopStrapi() {
  echo "Stopping strapi"
  kill -SIGINT "$strapiPID"
  wait "$strapiPID"
}

# If SIGINT is received, we call the _stopStrapi() function
trap _stopStrapi SIGTERM SIGINT

# Move into our working directory
cd /usr/src/api

# Declaring variables
APP_NAME=${APP_NAME:-meridian-api}
DATABASE_CLIENT=${DATABASE_CLIENT:-mongo}
DATABASE_HOST=${DATABASE_HOST:-localhost}
DATABASE_PORT=${DATABASE_PORT:-27017}
DATABASE_NAME=${DATABASE_NAME:-strapi}
DATABASE_SRV=${DATABASE_SRV:-false}
EXTRA_ARGS=${EXTRA_ARGS:-}

# If Strapi source hasn't been build, run `strapi new` command using variables declared earliers
if [ ! -f "$APP_NAME/package.json" ]
then
    strapi new ${APP_NAME} --dbclient=$DATABASE_CLIENT --dbhost=$DATABASE_HOST --dbport=$DATABASE_PORT --dbsrv=$DATABASE_SRV --dbname=$DATABASE_NAME --dbusername=$DATABASE_USERNAME --dbpassword=$DATABASE_PASSWORD --dbssl=$DATABASE_SSL --dbauth=$DATABASE_AUTHENTICATION_DATABASE $EXTRA_ARGS
# Else, run npm install in our specified directory
elif [ ! -d "$APP_NAME/node_modules" ]
then
    npm install --prefix ./$APP_NAME
fi

# Change working directory
cd $APP_NAME

# Generate build folder to access our Strapi dashbaord
strapi build &

# Start the strapi project
strapi start

# Set a variable to track Strapi's process ID
strapiPID=$!

# Wait until the Strapi process has completed and terminated
wait "$strapiPID"
