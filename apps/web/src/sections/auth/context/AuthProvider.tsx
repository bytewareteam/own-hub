import React from 'react';
import { AuthContext } from './AuthContext';
import { useAuth0 } from '@auth0/auth0-react';
import {
  createAuth0AuthRepository,
  isAuthenticatedUseCase,
  signInUseCase,
  signOutUseCase,
} from '../../../modules/auth';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth0Api = useAuth0();
  const authRepository = createAuth0AuthRepository(auth0Api);
  const login = () => signInUseCase(authRepository);
  const isAuthenticated = isAuthenticatedUseCase(authRepository);
  const logout = () => signOutUseCase(authRepository);
  return (
    <AuthContext.Provider value={{ login, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
