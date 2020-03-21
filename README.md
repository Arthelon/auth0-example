## auth0-example

This is a project following the [Auth0 React SPA tutorial](https://auth0.com/docs/quickstart/spa/react/01-login) created to demonstrate the `auth0-spa-js` tools work with existing Auth0 APIs.

### Setup

#### Project Setup

Use npm to install packages in both `backend` and `frontend` directories. Afterwards, copy the `.env.example` file in each folder and rename it to `.env` and enter in your own environment variables.

The `HOST` env variable sets the hostname that the app is running on. Note that this **hostname must be something other than `localhost`** to work with Auth0. To make a custom hostname point at your own machine, add the following line to your hosts file (`/etc/hosts` for UNIX machines):

```
127.0.0.1 mycustomhost.example
```

The frontend development server runs on HTTPS to work with Auth0. By default, the development server uses a self-signed certificate but you can set a custom certificate using the `SSL_CRT_FILE` and `SSL_KEY_FILE` frontend environment variables.

#### Auth0 Setup

Create a new Auth0 Single Page Web Application from the Auth0 dashboard and copy the `Domain` and `Client ID` into the `frontend/.env` file and the domain into `backend/.env`. Under Application Settings, configure your callback URL, logout URL, and Allowed Web Origins to point to `https://MY_HOST_NAME:3000` where `MY_HOST_NAME` is the custom hostname you're running the frontend on.

Create a new Auth0 API and designate a custom identifier to it. The signing algorithm should be set to `RS256`. Copy the API identifier and paste it into your frontend and backend `.env` files as `REACT_APP_AUTH0_DOMAIN`and `AUTH0_DOMAIN` respectively.
