# author(s): Mario Arturo Lopez Martinez
# file: Dockerfile
# last modified: February 7th, 2020

FROM node:13

WORKDIR /home/node/app
ADD ./package.json .
ADD ./yarn.lock .
RUN yarn