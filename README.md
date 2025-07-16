# Microservices example

This is a project in Node JS with Express JS, where it simulates an example of how a backend developer with serverless architecture works.

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
  a. On `/auth` run `npm run dev`
  a. On `/movies` run `npm run dev`

---

# API DOCS

- Users endpoints

1. `POST | http://127.0.0.1:3000/auth/register` with body `{name: str, "email": str, password: str}` <- Returns user's id, email, and _jwt token_

2. `POST | http://127.0.0.1:3000/auth/login` with body `{"email": str, password: str}` <- Returns user's id, email, and _jwt token_
