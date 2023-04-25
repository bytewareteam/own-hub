import React from 'react';

import { useAuth } from '../context';

export function LogoutButton() {
  const { logout } = useAuth();
  return <button onClick={logout}>Sign out</button>;
}

export default LogoutButton;
