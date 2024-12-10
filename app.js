// importing express package
const express = require("express");
// create a server instance
const app = express();

// set constant to port
const port = process.env.PORT || 3000;

// other imports
const examplesRouter = require("./routers/examplesRouter");
const { notFoundHandler } = require("./middlewares/notFoundHandler");
const { errorsHandler } = require("./middlewares/errorsHandler");

// define static assets path
// create pubic directory inside root directory mkdir public
app.use(express.static("public"));

// root route
app.get("/", (req, res) => {
    res.send("HomePage");
});

// other routes
app.use("/examples", examplesRouter);

// fallbacks and errors handlers
app.use(notFoundHandler);
app.use(errorsHandler);

// server must listen on your host and your port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
