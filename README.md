# htmx-live-chat

A barebones realtime chat application powered by typescript, htmx, typed-html, tailwind, and koa.

### Development

THis project is configured to leverage `nvm` and `pnpm`.

```bash
# install dependencies for correct node version
nvm use && pnpm i

# auto reload tailwind classes
pnpm tw:watch

# in a new terminal, run the application
nvm use && pnpm dev
```
