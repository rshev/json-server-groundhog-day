# json-server with a "groundhog day" superpowers

This is an easily deployable [json-server](https://github.com/typicode/json-server), **self-resetting its database every hour**.

### Why?

A recent frontend bootcamp graduate was struggling with deploying their projects, based on `json-server` "backend". 
Keeping in mind that deployment only might not be enough, as databases could be polluted by bad internet actors, I came up with this "groundhog day" idea, which will wipe database to a pre-saved state every hour.
This way it should be good enough to demo projects' functionality, but also keep them in intended state for future visitors.

## tl;dr way to deploy on [Glitch](https://glitch.com)

- open [this Glitch project](https://glitch.com/~json-server-groundhog-day)
- click "Remix" to have your own copy
- edit `db.json` in there and have it instantly deployed! ("show" gives you the address)
- point your frontend project to that address
- profit, enjoyment, etc :D

### Other deployment options

This repo can be cloned, `db.json` changed and deployed to any service able to host Node (Heroku, AWS, Vercel, DigitalOcean, Google, Azure, you name it).

## Semi-advanced

- you can run it locally via `npm run develop`, it will watch and save changes into `db.json`, which is probably what you want while working on your frontend
- db reset interval can be changed in `server.js`
- locally default port is `3100`, change it in `package.json` if needed
