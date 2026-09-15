# BookNook
> Tracking the best in romance, from Forks to Mayfair.

### authorship + version

`@isabellaorear31-design` | `2026-09-14` | `GOLF`

### deployments, codebase, & repo features 

| resource | link |
| --- | --- |
| PROD codebase | [`main`](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main) |
| PROD server | [GCP](http://34.162.84.165) |
| DEV codebase | [`dev`](https://github.com/isabellaorear31-design/fullstack-booknook/tree/dev) |
| DEV server | [Render](https://dashboard.render.com/project/prj-dabha0dcqm1c73dk6llg) |
| docs | [`docs/`](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/docs) |
| published docs | [GitHub Pages](https://isabellaorear31-design.github.io/fullstack-booknook/) |
| CI/CD workflow | [`deploy.yml`](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/.github/workflows/deploy.yml) |
| successful PROD deployment | [GitHub Action](REPLACE_WITH_ACTION_RUN_URL) |
| resolved GOLF issue | [issue #1](REPLACE_WITH_ISSUE_URL) |

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and automatically deploy changes to DEV and PROD environments.

### narrative

Built a full-stack romance book discovery application with automated CI/CD pipelines. Pushes to the dev branch automatically deploy to a Render staging environment, while pushes to main trigger a GitHub Actions workflow that deploys updates to a Compute Engine instance on GCP running Nginx, PM2, and Certbot for HTTPS termination.

### architecture

```text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure 

```text
fullstack-booknook/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/

```

### GCP

external IP: `34.162.84.165`\
Linux user: `isabella_orear31`\
instructor SSH public key installed: `yes`
