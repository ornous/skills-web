FROM node:8-alpine
RUN yarn global add artillery
COPY artillery.yml .
CMD [ "artillery", "run", "artillery.yml" ]
