CI / Deploy to Vercel
=====================

This repository contains a GitHub Actions workflow that builds the project and deploys to Vercel.

What it does
- Builds the project (npm ci + npm run build)
- On push to `main` deploys to production on Vercel
- On Pull Request creates a preview deploy on Vercel

Required repository secrets (Settings → Secrets → Actions):
- VERCEL_TOKEN — personal token from Vercel (Account → Tokens)
- VERCEL_ORG_ID — organization id for your Vercel account (from project settings)
- VERCEL_PROJECT_ID — project id in Vercel (from project settings)

How to obtain them
1. Go to https://vercel.com and open your project.
2. Project Settings → General → Get the Project ID.
3. Organization Settings → Get the Organization ID (if applicable).
4. Account → Tokens → Create a new token. Copy it.
5. In GitHub repo settings, add the three values as repository secrets.

Notes
- If you prefer, you can skip GitHub Actions and connect the repository directly in the Vercel UI — Vercel will handle builds and deploys automatically.
- Keep secrets in GitHub Secrets only. Do not commit tokens to the repo.

***

If you'd like, I can also:
- Add a lightweight health-check workflow that runs on PRs (lint/build only),
- Configure automatic rollback or Slack notifications after deploy,
- Or push the new workflow file to remote and create a PR for you.
