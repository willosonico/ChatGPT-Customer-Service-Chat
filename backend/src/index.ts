
let express = require("express");
const {queryChatGPT} = require("./lib/conversation");
let app = express();

app.listen(3307, () => {
    console.log("Server running on port 3307");
});


// @ts-ignore
app.get("/query", async (req, res) => {
    let response = await queryChatGPT('ciao chatgpt')
    res.json(response)
})

// @ts-ignore
app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
