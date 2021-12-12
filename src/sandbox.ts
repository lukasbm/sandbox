import { randomUUID } from "crypto";
import Docker, { Container } from "dockerode";
import { writeFile } from "fs/promises";
import config from "./config.json";

interface Job {
  startedAt: Date;
}

export class Sandbox {
  private docker: Docker = new Docker({ socketPath: "/run/docker.sock" });
  private path: string = "./data";

  private active = new Map<string, Job>();

  constructor() {
    // for (const [key, value] of Object.entries(config)) {
    //   this.docker
    //     .pull(value.image)
    //     .then((x) => console.log(x))
    //     .catch((err) => console.error(err));
    // }
  }

  public runCode(language: string, code: string): string | null {
    let c: any = config[language as keyof typeof config];
    let id: string = this.generateNewName();

    writeFile(`${this.path}/${id}`, code, { flag: "wx" })
      .then(() => {
        this.active.set(id, { startedAt: new Date(Date.now()) });
        this.startCodeContainer(id, c);
      })
      .catch((err) => console.error(err));

    return null;
  }

  private generateNewName(): string {
    let s: string;
    do {
      s = randomUUID();
    } while (this.active.has(s));
    return s;
  }

  private startCodeContainer(id: string, conf: any): void {
    this.docker.run(
      conf.image,
      ["python3", "-c", "print('hello world')"],
      process.stdout,
      { HostConfig: { AutoRemove: true } }
    );
  }
}
