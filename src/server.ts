import express, { Application, Request, Response } from "express";
import config from "./config.json";
import { Sandbox } from "./sandbox";

const app: Application = express();
const port = 8080;

const sandbox = new Sandbox();

// app.use(express.json());
app.use(express.text());
// app.use(express.raw());
app.use(express.urlencoded({ extended: false }));

app.get("/executeCode", (req: Request, res: Response) => {
  let language: string = req.query.language as string;
  if (!language) {
    return res.status(400).send("No language provided");
  }
  if (!(language in config)) {
    return res.status(400).send("invalid language provided");
  }

  let code: string = req.body;
  return res.send(code);
});

function startServer(): void {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

export { startServer };
