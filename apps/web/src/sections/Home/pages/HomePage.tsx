import { LoginButton, useAuth } from '../../auth';
import LogoutButton from '../../auth/components/LogoutButton';

export function HomePage() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <nav>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </nav>
      <h1>
        <span> Hello there, </span>
        Welcome to OwnHub 👋
      </h1>
    </div>
  );
}
