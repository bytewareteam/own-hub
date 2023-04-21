import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_CONFIG } from './modules/user/domain/auth0';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider {...AUTH0_CONFIG}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
