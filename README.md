# ChatGPT customer service chat

## Setup

Configure the environment by modifying .env.example

    copy .env.example .env

Configure the assistant behavior by modifying the contents inside backend/src/custom/static_content.js

Start the backend

    sudo bash scripts/03_start_backend.sh

or, for starting in dev mode

    sudo bash scripts/03_start_backend_dev.sh

query the endpoint to the /query endpoint path with ?message=what you want
