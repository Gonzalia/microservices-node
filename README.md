# Microservices example

This is a project in Node.js with Express.js, simulating how a backend developer structures microservices architecture.

- Step 1: Install dependencies in each project

  a. On `/gateway` run `npm install`

  a. On `/auth` run `npm install`

  a. On `/movies` run `npm install`

  ***

- Step 2: Initialize the user database on `/auth` with `npx prisma init --datasource-provider sqlite`

---

- Step 3: Initilize the movies database on `/movies` with `npx prisma init --datasource-provider sqlite`

---

- Step 4: Now, run all the servers

  a. On `/gateway` run `npm run dev`

  b. On `/auth` run `npm run dev`

  c. On `/movies` run `npm run dev`

---

# API DOCS

- Users endpoints

1. `POST | http://127.0.0.1:3000/auth/register` with body `{name: str, email: str, password: str}` <- Returns user's id, email, and a _jwt token_

2. `POST | http://127.0.0.1:3000/auth/login` with body `{"email": str, password: str}` <- Returns user's id, email, and a _jwt token_

Remember save this jwt token

- Movies endpoint

1. `POST | http://127.0.0.1:3000/movies` with body `{title: str, rating: number}` for example `{title: "Harry Potter", rating: 4}` and the jwt token on Authorization header, returns register id, title, rating, userId and createdAt values.

So..

## How microservices works?

Each folder (/gateway, /auth, /movies) represents an independent microservice. They run on separate servers and handle specific responsibilities: /auth manages user authentication, /movies handles movie data, and /gateway acts as an entry point, forwarding requests to the appropriate service.
