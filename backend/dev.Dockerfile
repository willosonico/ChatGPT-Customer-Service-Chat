FROM node:16

WORKDIR /app

RUN yarn install

ENTRYPOINT /bin/bash /app/docker_start_dev.sh
