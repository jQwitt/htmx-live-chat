# htmx-live-chat

A barebones realtime chat application powered by typescript, htmx, typed-html, tailwind, koa, prisma, and postgresql.

### Development

This project is configured to leverage `nvm` and `pnpm`.

```bash
# install dependencies for correct node version
nvm use && pnpm i

# configure your database connection url in the `.env` file
npx prisma db seed # optional

# auto reload tailwind classes
pnpm tw:watch

# in a new terminal, run the application
nvm use && pnpm dev
```

#### Resources

[Sharing a database connection in Node](https://itnext.io/how-to-share-a-single-database-connection-in-a-node-js-express-js-app-fcad4cbcb1e)
[User Avatars - Cecile L. Parker (Dribble)](https://dribbble.com/shots/5401553-User-avatars-Sketch-file)
