FROM node:8-alpine
MAINTAINER Ozzy Ndiaye <snekshaark@gmail.com>

ENV NODE_ENV "production"
ENV APP_PORT 5000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN yarn global add serve

ADD package.json yarn.lock ./
RUN yarn

ADD . /usr/src/app

RUN yarn build

EXPOSE 5000
CMD [ "serve", "-s", "build" ]
