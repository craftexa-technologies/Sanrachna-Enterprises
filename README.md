# Sanrachana Enterprises

Project: Sanrachana Enterprises — a Vite + React + TypeScript site.

Local development

Prerequisites: Node.js and npm installed.

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

Tech stack

- Vite
- TypeScript
- React
- Tailwind CSS

Deployment

Build for production:

```sh
npm run build
npm run preview
```

Contributing

- Fork and open a PR for fixes or improvements.
- Run `npm run lint` to check linting rules and `npm run test` for tests.

Vercel Deployment

- This project is ready to deploy to Vercel as a static site. It includes `vercel.json` configured to build the site with `@vercel/static-build` and route all SPA URLs to `index.html`.
- Vercel will run `npm run build` (or `npm run vercel-build` if present) and serve the `dist` folder.

Environment variables (Supabase)

- Configure these environment variables in your Vercel project dashboard (Project → Settings → Environment Variables):
	- `VITE_SUPABASE_URL` — your Supabase URL (e.g. `https://<project>.supabase.co`)
	- `VITE_SUPABASE_PUBLISHABLE_KEY` — the anon/publishable key
	- `VITE_SUPABASE_PROJECT_ID` — (optional) project id used by the app

- Do NOT add the `service_role` (secret) key to client-side envs or commit it to the repo. If you need server-side secrets, add them as Vercel Environment Variables and use serverless functions.

Deploy steps

1. Create a new project on Vercel and connect your Git repository (GitHub/GitLab/Bitbucket).
2. In the Vercel project settings, add the environment variables listed above for the `Preview` and `Production` environments.
3. Deploy — Vercel will run the build and publish the site. Enable automatic deploys from the main branch if you want continuous deploys.

If you want, I can prepare the repository for your boss (branch, PR, or a short deploy checklist). Which would you prefer? 
