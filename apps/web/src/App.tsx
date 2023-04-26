import { HomePage } from './sections/Home/pages/HomePage';
import { AuthProvider } from './sections/auth';

export const App = () => (
  <AuthProvider>
    <HomePage />
  </AuthProvider>
);

export default App;
