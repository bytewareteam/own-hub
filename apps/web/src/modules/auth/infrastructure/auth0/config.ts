import { Auth0ProviderOptions } from '@auth0/auth0-react';

export const AUTH_REDIRECT_URI = `${window.location.origin}`;

export const config: Auth0ProviderOptions = {
  domain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  clientId: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
  authorizationParams: {
    redirect_uri: AUTH_REDIRECT_URI,
  },
};
