import React from 'react';

import { useAuth } from '../context';

export function LoginButton() {
  const { login } = useAuth();

  return <button onClick={login}>Log In</button>;
}
