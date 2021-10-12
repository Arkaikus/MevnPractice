## MevnPractice

This repo contains MEVN Stack practice with [bootstrap examples](https://getbootstrap.com/docs/5.1/examples/) and a simple expressjs api

## Backend
you can check the express api also in [backend branch](https://github.com/Arkaikus/MevnPractice/tree/backend)

### Setup

- Go to `backend` folder
- Run `npm i` to install dependences
- Run `npm run dev` to launch nodemon dev server
- Go to `localhost:4000`
- Check the thunderclient collection

### Docs

- Posts
  - **controller.js**: methods for get,update,delete posts
  - **model.js**: mongoose model
  - **routes.js**: app setup with posts routes

- Customers
  - **controller.js**: methods for get,update,delete customers
  - **model.js**: mongoose model
  - **routes.js**: app setup with customers routes

- Products
  - **controller.js**: methods for get,update,delete products
  - **model.js**: mongoose model
  - **routes.js**: app setup with products routes

## Frontend
### Vuejs Heroku

- Create `static.json` file in vuejs app folder, in this example `frontend`

```json
{
    "root": "dist",
    "clean_urls": true,
    "routes": {
        "/**": "index.html"
    }
}
```
- Install [HerokuCLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Open terminal in repo folder
- Run

```bash
  heroku login
  heroku create mevnfrontend
  git remote rm heroku
  heroku git:remote -a mevnfrontend --remote frontend  
  heroku buildpacks:set -a mevnfrontend https://github.com/timanovsky/subdir-heroku-buildpack
  heroku buildpacks:add -a mevnfrontend heroku/nodejs
  heroku buildpacks:add -a mevnfrontend https://github.com/heroku/heroku-buildpack-static
  heroku config:set -a mevnfrontend PROJECT_PATH=frontend
  
  git push heroku main
```
- If current branch is different then run

```bash
  git push heroku <branch>:main
```

- **It's recommended using heroku client to specify buildpacks**

## LICENCE

MIT Licence  
Check the LICENCE file
