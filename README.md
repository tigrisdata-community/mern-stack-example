# mern-stack-example
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

[![CI](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml/badge.svg)](https://github.com/mongodb-developer/mern-stack-example/actions/workflows/main.yaml)

## How To Run
Create an Atlas URI connection parameter in `mern/server/config.env` with your Atlas URI:
```
DATABASE_NAME=mern-to-tern
TIGRIS_CLIENT_ID={TIGRIS_CLIENT_ID}
TIGRIS_CLIENT_SECRET={TIGRIS_CLIENT_SECRET}
TIGRIS_PROJECT=mern-to-tern
TIGRIS_URI=api.preview.tigrisdata.cloud
TIGRIS_DB_BRANCH=main
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```

## Disclaimer

Use at your own risk; not a supported MongoDB product
