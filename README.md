# 🏄 surf-king

![](media/board.png)

## Development

### Stack
- [boardgame.io](https://boardgame.io/)
- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [Node](https://nodejs.org/en/) 14
- [TypeScript](https://www.typescriptlang.org/)

### Setup using docker

First time only:
```bash
docker-compose build
```

Run container:
```bash
docker-compose up -d
```

Enter on container:
```bash
docker-compose exec dev bash
```

### Prepare enviroment

```bash
yarn
```

### Run server

```bash
yarn run server
```

### Run app

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributors

Checkout [Contribute](CONTRIBUTING.md) for details.
