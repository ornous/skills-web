FROM node:8-alpine as builder
MAINTAINER Ozzy Ndiaye <snekshaark@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock ./
RUN yarn

ADD . .

RUN yarn build

FROM node:8-alpine
ENV NODE_ENV "production"
ENV APP_PORT 5000
EXPOSE 5000

RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
CMD [ "serve", "-s", "-S", "build" ]
