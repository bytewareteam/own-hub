import { useAuth0 } from '@auth0/auth0-react';

export default function Profile(): JSX.Element {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      {isAuthenticated && (
        <nav>
          <article>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <a href="##">Editar perfil</a>
          </article>
          <hr />
          <ul>
            <li>
              <a href="##">Planes pagados</a>
            </li>
            <li>
              <a href="##">Configuracion de la cuenta</a>
            </li>
            <li>
              <a href="##">Notificaciones</a>
            </li>
          </ul>
          <hr />
        </nav>
      )}
      .
    </>
  );
}
