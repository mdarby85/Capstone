# Based on Docker configurations found at: https://github.com/STUkh/gatsby-strapi-docker/
# 
# Author: Mario Arturo Lopez Martinez
# File: strapi/Dockerfile
# Last Modified: February 10th, 2020

# Base image
FROM node:13-alpine

# Metadata for our Strapi image
LABEL maintainer="Mario Arturo Lopez <mario_lopez@baylor.edu>" \
      org.label-schema.vendor="Strapi" \
      org.label-schema.name="Strapi Docker image" \
      org.label-schema.description="Strapi containerized" \
      org.label-schema.url="https://strapi.io" \
      org.label-schema.vcs-url="https://github.com/strapi/strapi-docker" \
      org.label-schema.version=latest \
      org.label-schema.schema-version="1.0"

# Sets the working directory for any following instructions
WORKDIR /usr/src/api

# Fix for installation issues with NPM
# More info here: https://geedew.com/What-does-unsafe-perm-in-npm-actually-do/
RUN echo "unsafe-perm = true" >> ~/.npmrc

# Installing Strapi source on image
RUN npm install strapi@beta -g

# Copy over Strapi script to set up configuration and make it executable
COPY strapi.sh ./
RUN chmod +x ./strapi.sh

# Exposing the default port used by Strapi
EXPOSE 1337

# Copying over the healthcheck script
COPY healthcheck.js ./

# The HEALTHCHECK instruction tells Docker how to test a container to check
# that it is still working. This can detect cases such as a web server that
# is stuck in an infinite loop and unable to handle new connections, even
# though the server process is still running.
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
      CMD node /usr/src/api/healthcheck.js

# Run the script to set up our strapi configuration
CMD ["./strapi.sh"]
