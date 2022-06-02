# Description

Web app with the function of taking in issues or bugs within a team and tracking each as it’s own item. Items can be marked with various descriptors including completion, severity, issue type, author, claimant. The app will be adaptable in aesthetic so as far as to change it to a helpdesk or administrative console.

# Framework

- Next.JS
- MongoDB
- MUI
- Authorisation
  - Auth0?

# Software Requirement Specification

- Authorisation
  - email / password
  - forgot password
  - Registration
  - sign in
  - Demo user?
- User roles
  - Admin
  - Project manager
  - developer
  - submitter?
- Dashboard
  - Stats
    - types
    - progress
- Create issue
- Read issue
- Update issue
- Delete issue
- Rate an issue’s severity
- Rate an issue’s type
- Track an issue’s progress
- Track an issue’s history
- Issue’s can have attachments
- Tickets can be filtered via search bar
- Use issue tracker for it’s own project

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
