## auth0-example

This is a project following the [Auth0 React SPA tutorial](https://auth0.com/docs/quickstart/spa/react/01-login) created to demonstrate the `auth0-spa-js` tools work with existing Auth0 APIs.

### Setup

Use npm to install packages in both `backend` and `frontend` directories. Afterwards, copy the `.env.example` file in each folder and rename it to `.env` and enter in your own environment variables.

The `HOST` env variable sets the hostname that the app is running on. Note that this **hostname must be something other than `localhost`** to work with Auth0. To make a custom hostname point at your own machine, add the following line to your hosts file (`/etc/hosts` for UNIX machines):

```
127.0.0.1 mycustomhost.example
```

The frontend development server runs on HTTPS to work with Auth0. By default, the development server uses a self-signed certificate but you can set a custom certificate using the `SSL_CRT_FILE` and `SSL_KEY_FILE` frontend environment variables.
