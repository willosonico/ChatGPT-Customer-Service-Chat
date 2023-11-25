# ChatGPT customer service chat

## Requirements
 
- install docker and docker compose, for ubuntu run

        sudo bash scripts/01_install_docker_ubuntu.sh

## Setup

1. Configure the environment by modifying .env.example

        copy .env.example .env

2. Configure the assistant behavior by modifying the contents inside backend/src/custom/static_content.js

3. Start the project

       sudo bash scripts/02_start.sh

query the endpoint to the /query endpoint path with ?message=what you want
