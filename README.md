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