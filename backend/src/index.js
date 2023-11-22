let express = require("express");
let app = express();

app.listen(3307, () => {
    console.log("Server running on port 3307");
});

app.get("/", (req, res) => {
    res.send('chatgpt-csc')
})

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
