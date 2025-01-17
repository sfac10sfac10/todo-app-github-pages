# React To-Do App

This is a simple to-do list application built with React, Gatsby, and TailwindCSS. The app allows users to manage their tasks and is hosted using GitHub Pages.

## Live Demo

The application is live at:
[https://sfac10sfac10.github.io/todo-app-github-pages/](https://sfac10sfac10.github.io/todo-app-github-pages/)

---

## Features

- Add, edit, and delete tasks
- Responsive design with TailwindCSS
- Hosted on GitHub Pages with a custom `pathPrefix`

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sfac10sfac10/todo-app-github-pages.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-app-github-pages
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run develop
   ```
   The app will be available at `http://localhost:8000`.

### Building for Production

To build the app for production with the correct `pathPrefix`:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run serve
```
The app will be served at `http://localhost:9000/todo-app-github-pages`.

---

## Deployment

The app is deployed to GitHub Pages using the following process:

1. Build the application with the correct prefix paths:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This uses the `gh-pages` package to publish the `public` directory to the `gh-pages` branch.

---

## Continuous Integration

A GitHub Actions workflow (`ci.yml`) is included to:
- Run tests using CodeQL.
- Build the app.
- Deploy the app to GitHub Pages.

To use this workflow:
- Push changes to the `master` branch.
- The app will automatically be deployed to GitHub Pages.

---

## Technologies Used

- **React**: For building the user interface.
- **Gatsby**: For site generation and performance optimizations.
- **TailwindCSS**: For styling.
- **GitHub Pages**: For hosting the site.

---

## Notes

The site is hosted at:
[https://sfac10sfac10.github.io/todo-app-github-pages/](https://sfac10sfac10.github.io/todo-app-github-pages/)

Ensure that any changes to the `pathPrefix` in `gatsby-config.js` match the `homepage` field in `package.json` and the GitHub repository name.

---

## License

This project is licensed under the [MIT License](LICENSE).

