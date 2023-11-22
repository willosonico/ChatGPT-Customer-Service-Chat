import {getConversationInitialMessages} from "../custom/static_content";
import {openai} from "./connectors";

export async function queryChatGPT(message) {
    let user_message = [
        {
            "role": "user",
            "content": message + ". Don’t justify your answers. Don’t give information not mentioned in the CONTEXT INFORMATION. Give short and fast answers."
        }
    ]

    let messages = getConversationInitialMessages().concat(user_message)

    const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: messages,
    });

    return response.choices[0].message.content
}
