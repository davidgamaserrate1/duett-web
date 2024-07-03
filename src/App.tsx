import './styles/reset.css'
import './styles/global.css'

import { HelmetProvider } from 'react-helmet-async';
import { RoutesApplication } from './routes';

function App() {
  return (
    <HelmetProvider>
      <RoutesApplication />   

    </HelmetProvider>
  );
}

export default App;
