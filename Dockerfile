FROM node:13

WORKDIR /home/node/app
ADD ./package.json .
ADD ./yarn.lock .
RUN yarn