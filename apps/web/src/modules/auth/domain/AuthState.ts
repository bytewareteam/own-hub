interface AuthenticatedUser {
  id: string;
  givenName: string;
  familyName: string;
  email: string;
}

export interface AuthState {
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
}
