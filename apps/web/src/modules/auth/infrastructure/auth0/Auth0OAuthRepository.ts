import { AuthRepository } from '../../domain/AuthRepository';
import { Auth0ContextInterface } from '@auth0/auth0-react';

export const createAuth0AuthRepository = (
  auth0API: Auth0ContextInterface
): AuthRepository => {
  return {
    isAuthenticated: () => auth0API.isAuthenticated,
    signIn: () => auth0API.loginWithRedirect(),
    signOut: async (): Promise<void> => {
      auth0API.logout({ logoutParams: { returnTo: window.location.origin } });
      await Promise.resolve();
    },
  };
};
