# BookNook
> Tracking the best in romance, from Forks to Mayfair.

`@isabellaorear31-design` | `2026-10-13` | `HOTEL`

## deployments + codebase
[main](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main) | [PROD (GCP)](http://34.162.84.165) | [dev](https://github.com/isabellaorear31-design/fullstack-booknook/tree/dev) | [DEV (Render)](https://fullstack-booknook.onrender.com) | [docs](https://github.com/isabellaorear31-design/fullstack-booknook/tree/main/docs) | [CI/CD workflow](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/.github/workflows/main.yml) | [successful PROD deployment](https://github.com/isabellaorear31-design/fullstack-booknook/actions)

## HOTEL grading dashboard

| requirement | evidence |
|---|---|
| MongoDB connection | [server code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| GET all | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| GET one | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| filtered GET | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| POST / create | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| PATCH / update | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| DELETE | [endpoint code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/server/app.js) |
| frontend `fetch()` | [client code](https://github.com/isabellaorear31-design/fullstack-booknook/blob/main/public/index.html) |
| persistent CRUD | [PROD app](http://34.162.84.165) |
| HOTEL milestone | [milestone](https://github.com/isabellaorear31-design/fullstack-booknook/milestones) |
| example issue | [issue #1](https://github.com/isabellaorear31-design/fullstack-booknook/issues) |
| development branch | [branch](https://github.com/isabellaorear31-design/fullstack-booknook/tree/hotel/crud-features) |
| feature → dev | [PR #](https://github.com/isabellaorear31-design/fullstack-booknook/pulls) |
| dev → main | [PR #](https://github.com/isabellaorear31-design/fullstack-booknook/pulls) |
| PROD deployment | [GitHub Action](https://github.com/isabellaorear31-design/fullstack-booknook/actions) |

## architecture

client → fetch() → Express REST API → MongoDB Atlas

feature → PR → dev → PR → main → GitHub Actions → GCP