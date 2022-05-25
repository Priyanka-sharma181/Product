let express = require("express");
let app = express();
app.use(express.json())

let port = process.env.PORT || 2410;

const jewelry = require("./Router/jewelry")

app.use("/",jewelry)

app.listen(port, console.log(`server started on http://localhost:${port}`));