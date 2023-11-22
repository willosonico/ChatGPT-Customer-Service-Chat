/*
    here you can set the static content to give useful information to the user
    you can set the type to "file" or "text" and populate the content field accordingly
    for file type content will contain the file name
    for text type content will contain directly the text that chatgpt has to keep in mind while responding to the user

    for example
    export const static_content = [
        {
            'type': 'file',
            'content': 'conditions.txt'
        },
        {
            'type': 'text',
            'content': 'lorem ipsum dolor sit amet, consectetur adipiscing '
        }
    ]

    files has to be created in the backend/src/custom folder

    also you need to populate the setup.txt file with something like this

    "You are an ecommerce assistant focused only on replying questions about YOUR STORE NAME and user orders or music catalog or general conditions"

 */

import * as fs from "fs";

const setup = [
    {
        "role": "system",
        "content": fs.readFileSync('src/custom/setup.txt').toString()
    },
]

export const static_content = [
    {
        'type': 'file',
        'content': 'conditions.txt'
    },
    {
        'type': 'text',
        'content': ''
    }
]

export function getStaticContent() {
    return static_content.map((config) => {
        if (config.type === 'text') {
            return {
                "role": "system",
                "content": config.content
            }
        }
        if (config.type === 'file') {
            let pathToFile = 'src/custom/' + config.content
            return {
                "role": "system",
                "content": fs.readFileSync(pathToFile).toString()
            }
        }
    })
}

export function getConversationInitialMessages() {
    let messages = setup.concat(getStaticContent())
    return messages
}
