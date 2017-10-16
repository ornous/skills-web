FROM node:8-alpine as dependencies
MAINTAINER Ozzy Ndiaye <snekshaark@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN apk add --no-cache python && \
    yarn install && \
    apk del make python && \
    yarn lint

FROM dependencies as builder
ENV NODE_ENV "production"

COPY . .
RUN CI=true yarn test && yarn build

FROM node:8-alpine as production
ENV NODE_ENV "production"
ENV APP_PORT 5000
EXPOSE 5000

RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
CMD [ "serve", "-s", "-S" ]
