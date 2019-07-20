import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <Link className="navbar-brand waitress-title" to="/">Waitress</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;