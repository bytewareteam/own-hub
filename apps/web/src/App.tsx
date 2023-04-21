import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './modules/user/infrastructure/LogoutButton';
import LoginButton from './modules/user/infrastructure/LoginButton';
import Profile from './modules/user/infrastructure/Profile';

export function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h1>
        <span> Hello there, </span>
        Welcome OwnHub 👋
      </h1>
      {isAuthenticated ? (
        <>
          {' '}
          <Profile /> <LogoutButton />{' '}
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

export default App;
