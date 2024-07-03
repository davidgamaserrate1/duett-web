import './notFound.styles.css';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (    
      <>
        <Helmet>
          <title>Oops! Página não encontrada</title>
        </Helmet>
        <div className="not_found">      
        <div className="not_found_content">
          <h1>Oops! Página não encontrada</h1>
          <p>A página que você está procurando não existe ou foi movida.</p>
          <Link to="/home" className="not_found_link">Voltar para a página inicial</Link>
        </div>
        </div>
      </>
  );
};
 