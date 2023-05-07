import express from "express";

const app = express();
const port = 9000;

app.use('/', (req, res, next) => {
    res.json({messge: "Hello From Express Application"})
})

app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});