FROM node:16

ARG BUILD_DEVELOPMENT

WORKDIR /app

RUN yarn install
RUN npm config set cache /tmp --global

ENTRYPOINT "/bin/bash" "/app/docker_start.sh"
