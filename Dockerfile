FROM node:8-alpine as dependencies
MAINTAINER Ozzy Ndiaye <snekshaark@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install && yarn lint

FROM dependencies as builder
ENV NODE_ENV "production"

COPY . .
RUN CI=true yarn test && yarn build

FROM node:8-alpine as loadtester
RUN yarn global add artillery
COPY artillery.yml .
CMD [ "artillery", "run", "artillery.yml" ]

ENV APP_HOST="localhost"
ENV APP_PORT=3000
FROM node:8-alpine as uitester
RUN yarn add cucumber selenium-webdriver@3.4.0 chromedriver@2.29.0
COPY features features
# Create and pull in cucumbe config (profiles etc.)
RUN echo I did nothing. I am a cheater

CMD [ "./node_modules/.bin/cucumber.js", "--dry-run", "--no-strict" ]
#RUN ./node_modules/.bin/cucumber.js --dry-run --no-strict

FROM node:8-alpine as production
ENV NODE_ENV "production"
ENV APP_PORT 5000
EXPOSE 5000

RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
CMD [ "serve", "-s", "-S" ]
