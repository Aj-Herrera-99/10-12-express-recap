// importing express package
const express = require("express");
// create a server instance
const app = express();

// set constant to port
const port = process.env.PORT || 3000;

// define static assets path
// create pubic directory inside root directory mkdir public
app.use(express.static("public"));

// other imports

// server must listen on your host and your port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
