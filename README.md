# ChatGPT customer service chat

## Requirements

install docker and docker compose, for ubuntu run

    sudo bash scripts/01_install_docker_ubuntu.sh

## Setup

Configure the environment by modifying .env.example

    copy .env.example .env

Configure the assistant behavior by modifying the contents inside backend/src/custom/static_content.js

Start the project

    sudo bash scripts/02_start.sh

query the endpoint to the /query endpoint path with ?message=what you want
