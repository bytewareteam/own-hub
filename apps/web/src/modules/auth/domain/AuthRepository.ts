export interface AuthRepository {
  isAuthenticated(): boolean;

  signIn(): Promise<void>;

  signOut(): Promise<void>;
}
