import React from 'react';

export interface AuthContextType {
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
});
