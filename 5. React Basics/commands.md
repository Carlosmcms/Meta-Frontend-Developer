# Basics

## Create React App
```npm create-react-app [app-name]```

# Others

## Eslint
```npm install eslint || --save-dev || -D```

## Standard lint
```npm install standard -D```

## Nodemon
```npm install nodemon || --save-dev```

Consider ```package.json``` file. To add lint configuration with Standard, it should looks like this:

```
{
  "name": "demo-package-json",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "nodemon": "2.0.7",
    "standard": "16.0.3"
  }
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": eslint ."
    
    // Added by custom
    "dev": "nodemon index.js",
    "lint": "eslint."

  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]

    // Added by custom
    "extends": ".node_modules/standard/eslintrc.json"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```