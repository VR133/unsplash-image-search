# Unsplash API Integration

![Preview](./preview.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

Use the following steps after you successfully cloned the repository
1) Run `npm run i` to install all used packages
2) Create a `.env` file in the main directory, the file should include:
    - `REACT_APP_UNSPLASH_URL` (default: `https://unsplash.com`)
    - `REACT_APP_UNSPLASH_API_URL` (default: `https://api.unsplash.com`)
    - `REACT_APP_UNSPLASH_ACCESS_KEY` - your unsplash access key
    - `REACT_APP_UNSPLASH_SECRET_KEY` - your unsplash secret key

## Available Scripts

In the project directory, you can run:

### `npm run start`

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

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
