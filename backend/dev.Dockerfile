FROM node:16

WORKDIR /app

RUN yarn install
RUN npm config set cache /tmp --global

ENTRYPOINT yarn watch
