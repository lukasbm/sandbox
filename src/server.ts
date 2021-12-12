import express, { Application, Request, Response } from "express";
import config from "./config.json";

const app: Application = express();
const port = 8080;

// app.use(express.json());
// app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get("/executeCode", (req: Request, res: Response) => {
  let language: string = req.query.language as string;
  if (!language) {
    return res.status(400).send("No language provided");
  }
  if (!(language in config)) {
    return res.status(400).send("invalid language provided");
  }

  let code: string = req.body as string;
  if (!code || Object.keys(code).length == 0 || code.trim() === "") {
    return res.status(400).send("no code provided");
  }

  return res.send(code);
});

app.get("/getLanguages", (req: Request, res: Response) => {
  res.send(config);
});

function startServer(): void {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

export { startServer };
