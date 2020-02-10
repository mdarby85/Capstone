#!/bin/sh

# Based on configuration scripts found at: https://github.com/STUkh/gatsby-strapi-docker/
# 
# Author(s): Mario Arturo Lopez Martinez
# File: wait-for-strapi.sh
# Last Modified: February 10th, 2020

# Command stops the a script from executing if a command or pipeline runs into an error.
set -e

# Set cmd variable to al of the command-line arguments
cmd="$@"

# Until we get a valid response from Strapi endpoint, sleep
# Currently pinging every 5 seconds, this can be changed if needed
until $(curl --output /dev/null --silent --head --fail http://$STRAPI_URL/admin); do
    >&2 echo  "Strapi is unavailable - sleeping"
    sleep 5
done

# Strapi is ready, start up front-end and allow GraphQL access to the endpoints
>&2 echo "Strapi is up - executing command"
exec $cmd