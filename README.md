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

