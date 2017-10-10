FROM node:8-alpine as dependencies
MAINTAINER Ozzy Ndiaye <snekshaark@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock ./
RUN yarn install && yarn validate-commit

FROM dependencies as builder
ADD . .
RUN yarn build

FROM dependencies as loadtester
RUN yarn global add artillery
ADD artillery.yml .
RUN artillery -c artillery.yml

ENV APP_HOST="localhost"
ENV APP_PORT=3000
FROM dependencies as uitester
RUN yarn global add selenium capybara
ADD cucumber.json features/ .
RUN cucumber -c cucumber.yml

FROM node:8-alpine as production
ENV NODE_ENV "production"
ENV APP_PORT 5000
EXPOSE 5000

RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
CMD [ "serve", "-s", "-S" ]
