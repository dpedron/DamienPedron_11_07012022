import React from 'react';
import '../styles/css/Error.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <main className="error">
      <h1 className="error--type">404</h1>
      <h2 className="error--message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error--go-home">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
