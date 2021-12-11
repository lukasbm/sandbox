import Docker, { Container } from "dockerode";
import config from "./config.json";

export class Sandbox {
  docker: Docker = new Docker({ socketPath: "/run/docker.sock" });

  constructor() {
    // for (const [key, value] of Object.entries(config)) {
    //   this.docker
    //     .pull(value.image)
    //     .then((x) => console.log(x))
    //     .catch((err) => console.error(err));
    // }
  }

  runCode() {
    this.docker
      .run(
        "python:3.10-alpine",
        ["python3", "-c", "print('hello world')"],
        process.stdout,
        { HostConfig: { AutoRemove: true } }
      )
      .then((c: Container) => {})
      .catch((err) => console.error(err));
  }
}
