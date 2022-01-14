import React from "react";
import '../styles/css/Error.css'

function Error(){
    return(        
        <main className="error">
            <h1 className="error--type">404</h1>
            <h2 className="error--message">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="error--go-home">Retourner sur la page d’accueil</a>
        </main>        
    )
}

export default Error;