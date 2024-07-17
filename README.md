# Personal Portfolio

The code behind my [personal portfolio](https://www.callumcurtis.com).

## Dependencies

The website is built with React and uses several libraries and packages, including:

- `@emotion/react` and `@emotion/styled` for styling
- `@mui/icons-material` and `@mui/material` for UI components
- `bootstrap` and `react-bootstrap` for additional styling and components
- `react-scroll` and `scrollreveal` for scrolling animations
- `styled-components` for custom styling
- `typescript` for type checking
- `vanta` for background animations

The website also includes several development dependencies, such as `eslint`, `prettier`, `husky`, and `lint-staged`.

## File Structure

The website is organized into the following directory structure:

```
src
├── App.css
├── App.tsx
├── components
│   ├── ...
│   └── sections
│       └── ...
├── context
    └── ...
├── hooks
    └── ...
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── styles
    └── mixins
        └── ...
```

- `App.tsx`: The main component that renders the website
- `components`: Contains all the UI components used in the website, including the navigation bar, footer, and individual sections
- `context`: Contains the context providers for the website's content and configuration
- `hooks`: Contains custom hooks used in the website
- `index.tsx`: The entry point for the website
- `styles`: Contains mixins and utility functions for styling

## Available Scripts

In the project directory, you can run:

`npm start`: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

`npm run build`: Builds the app for production to the build folder.

`npm run deploy`: Deploys the app to GitHub pages.
