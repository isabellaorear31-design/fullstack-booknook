# BookNook
> Tracking the best in romance, from Forks to Mayfair.

`@isabellaorear31-design` | `2026-10-13` | `HOTEL`

## deployments + codebase
[main](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main) | [DEV (Render)](https://fullstack-booknook.onrender.com) | [docs](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/docs) | [CI/CD workflow](https://github.com/isabellaorear31-design/fullstack-booknook/actions/workflows/deploy-main-to-gcp.yml)

## HOTEL grading dashboard

| requirement | evidence |
|---|---|
| MongoDB connection | [server code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| GET all | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| GET one | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| filtered GET | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| POST / create | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| PATCH / update | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| DELETE | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/server) |
| frontend `fetch()` | [app.js](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/public) |
| persistent CRUD | [DEV app](https://fullstack-booknook.onrender.com) |
| HOTEL milestone | [milestone](https://github.com/isabellaorear31-design/fullstack-booknook/milestones) |
| example issue | [issue #5](https://github.com/isabellaorear31-design/fullstack-booknook/issues/5) |
| development branch | [branch](https://github.com/isabellaorear31-design/fullstack-booknook/branches) |
| feature → dev | [PR](https://github.com/isabellaorear31-design/fullstack-booknook/pulls) |
| dev → main | [PR](https://github.com/isabellaorear31-design/fullstack-booknook/pulls) |
| PROD deployment | [GitHub Action](https://github.com/isabellaorear31-design/fullstack-booknook/actions) |

## architecture

client → fetch() → Express REST API → MongoDB Atlas

feature → PR → dev → PR → main → GitHub Actions → Render