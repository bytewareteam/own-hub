import { AuthRepository } from '../domain';

export function signInUseCase(repository: AuthRepository) {
  return repository.signIn();
}

export const signOutUseCase = (repository: AuthRepository) => {
  return repository.signOut();
};

export const isAuthenticatedUseCase = (repository: AuthRepository) => {
  return repository.isAuthenticated();
};
