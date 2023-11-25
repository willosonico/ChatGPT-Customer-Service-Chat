FROM node:20

ARG BUILD_DEVELOPMENT

WORKDIR /app

RUN yarn install

ENTRYPOINT "/bin/bash" "/app/docker_start.sh"
