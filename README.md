# inizialization
```bash
npm install
ni .env

.env file
    PORT = 3000 (arbitrary but recommended)

```package.json
"scripts": {
        "start": "node --env-file=.env app.js",
        "dev": "node --env-file=.env  --watch app.js"
    },

```bash
npm run dev -> testing mode

```bash
# create public folder
mkdir public

#make other directories
mkdir routers
mkdir middlewares
mkdir controllers
mkdir classes
mkdir models

#make example controller
cd controllers
ni examples.js