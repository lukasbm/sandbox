import Docker from "dockerode";

export class Sandbox {
  docker: Docker = new Docker({ socketPath: "/run/docker.sock" });

  public runCode(language: string, code: string): string {
    this.docker
      .createContainer({
        Image: "hello-world",
      })
      .then((c) => {
        c.start();
      })
      .then(() => console.log("done"))
      .catch((e) => console.error(e));

    return "test"
  }
}

console.log(new Sandbox().runCode("python", "print(hello world"));
