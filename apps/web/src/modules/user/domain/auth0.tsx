export const AUTH_REDIRECT_URI = `${window.location.origin}`;
export const AUTH0_CONFIG = {
  domain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  clientId: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
  authorizationParams: {
    redirect_uri: AUTH_REDIRECT_URI,
  },
};
