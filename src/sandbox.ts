import Docker, { Container } from "dockerode";

let docker: Docker = new Docker({ socketPath: "/run/docker.sock" });

docker.run("python:3.10-alpine", ["python3", "-c", "print('hello world')"], process.stdout, { HostConfig: { AutoRemove: true }})
  .then((c: Container) => {})
  .catch(err => console.error(err))
