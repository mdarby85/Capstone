# Based on Docker configurations found at: https://github.com/STUkh/gatsby-strapi-docker/
# 
# Author: Mario Arturo Lopez Martinez
# File: Dockerfile
# Last Modified: February 10th, 2020

# Base image
FROM node:13-alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

# Create and set working directory
RUN mkdir -p /home/gatsby-app
WORKDIR /home/gatsby-app

# Install linux system dependencies for alpine
RUN \
  apk add --no-cache git python make curl g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

# Install gatsby-cli on image
RUN npm install -g gatsby-cli

# Copy package.json to image
COPY package*.json ./

# Install packages
RUN ["yarn"]

# Copy sourcecode files
COPY . .

RUN chmod +x ./wait-for-strapi.sh

# Node image provide build-in non-root user
#USER node
#CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
