# health_app

## Install packages


```bash
  nvm use 18
  npm install
```

## How to run

- Run on dev environment:

```bash
  npm run dev
```

Information about server, port will displayed in terminal.

- Format code:

```bash
  npm run lint
```

- You can run build package in docker, try something like this

```bash
  docker build -f docker/Dockerfile   -t health-app  .
  docker run --env PORT=3500  -p 3500:3500  -t health-app
```

Project will **automatically** format code using above command every time commit code. Commit will be failed if some errors cannot be fixed automatically.
