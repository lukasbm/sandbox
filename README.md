# sandbox
Simple code sandbox.

## Prerequisites
- Docker >= 16
- Linux >= 4.14.77
- gVisor

## Technical Details
To run the (potentially malicious) code we use Docker.
As Docker uses a shared kernel from the host machine it is not directly suitable for sandboxing.
By using Google gVisor we introduce a application kernel that makes Docker suitable for the task.

## Install
The toolbox is writen in typescript.
It can be run directly or in docker itself.

### Directly
TODO

### Docker
```bash
docker image pull TODO
docker run -v /run/docker.sock:/run/docker.sock TODO
```

## Use the Sandbox
The sandbox can be adresses using REST|RPC TODO