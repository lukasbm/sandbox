import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/executeCode", (req: Request, res: Response) => {
    console.log(req.query);
    res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
