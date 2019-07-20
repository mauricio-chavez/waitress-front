import React from "react";

import './Login.css';

const Login = props => {

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      {(props.authenticated) ? <p>Autenticado</p> : <p>Oh, no!</p>}
      <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Ingresa a <span className="waitress-title">Waitress</span></h1>
      <label for="inputEmail" className="sr-only">Correo Electrónico</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" required={true} autofocus={true} />
      <label for="inputPassword" className="sr-only">Contraseña</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required={true} />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Recuérdame
      </label>
      </div>
      <button className="btn btn-lg btn-dark btn-block" onClick={props.authToggler}> Iniciar sesión</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
    </form>
  )
};

export default Login;