# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `lint:js`

The script "lint:js": "eslint src/**/*.{js,jsx}" runs the JavaScript and JSX code static analysis tool called ESLint on all files with the extensions .js and .jsx located within the src folder of your project.

# Description

This setup is fully configured to work with both small and large projects. All settings are already adjusted to work with Single Page Apps for GitHub Pages as well as with react-router-dom for routing.

## Getting Started

1. Make sure that the LTS version of Node.js is installed on your computer.
   Download and install it if necessary.
2. Install the project's basic dependencies by running the command npm install.
   Start the development mode by executing the command npm start.
3. Open your browser and navigate to http://localhost:3000.
   This page will automatically reload after saving changes to project files.

## Deployment

The production version of the project will automatically undergo linting, be built, and deployed to GitHub Pages into the gh-pages branch every time the main branch is updated. For example, after a direct push or a merged pull request. To enable this, edit the homepage field in the package.json file, replacing your_username and your_repo_name with your own, and push the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

## Routing

If your application uses the react-router-dom library for routing, you need to additionally configure the <BrowserRouter> component by passing the exact name of your repository in the basename prop. The slash at the beginning of the string is mandatory.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## Production Build (not for GitHub)

### To create a production version (not for GitHub):

1. In the package.json file, you will need to remove the homepage field, because    if you don't, the Production Build will succeed, but the base URL reading will be   incorrect, resulting in a blank page instead of your working application.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

2. In the index.js file, you will need to remove passing the basename prop to the <BrowserRouter> component, along with the exact name of your repository. This is because during Production Build, this will also lead to incorrect base URL reading, resulting in a blank page instead of your working application.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```  
