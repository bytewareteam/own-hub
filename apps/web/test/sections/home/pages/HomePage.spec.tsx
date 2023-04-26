import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HomePage } from '../../../../src/sections/Home/pages/HomePage';
import { afterEach, vi } from 'vitest';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthProvider } from '../../../../src/sections/auth';

function renderHomePage() {
  const user = userEvent.setup();
  render(
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
  return { user };
}

vi.mock('@auth0/auth0-react');
describe('HomePage', () => {
  afterEach(() => {
    vi.mocked(useAuth0).mockRestore();
  });

  it('should render successfully', () => {
    // Arrange
    vi.mocked(useAuth0, { partial: true }).mockReturnValue({
      isAuthenticated: false,
    });
    renderHomePage();
    // Assert
    screen.getByRole('heading', { name: /Welcome to OwnHub/i });
  });

  it('should render login button when user is not authenticated', async () => {
    // Arrange
    const loginWithRedirect = vi.fn();
    vi.mocked(useAuth0, { partial: true }).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect,
    });
    const { user } = renderHomePage();
    // Act
    const loginButton = screen.getByRole('button', { name: /login/i });
    await user.click(loginButton);
    // Assert
    expect(loginWithRedirect).toHaveBeenCalled();
  });

  it('should render logout button when user is authenticated', async () => {
    // Arrange
    const logout = vi.fn();
    vi.mocked(useAuth0, { partial: true }).mockReturnValue({
      isAuthenticated: true,
      logout,
    });
    const { user } = renderHomePage();
    // Act
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    await user.click(logoutButton);
    // Assert
    expect(logout).toHaveBeenCalled();
  });
});
