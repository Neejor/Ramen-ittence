import React from "react";

function navbar(props) {
  return (
    <nav className={props.class} id="navbar">
      <div className="container-fluid ms-3 me-3 pt-2 pb-2">
        <a className="navbar-brand" href="http://localhost:4000/dishCatalogueDB">Ra-Main</a>
        <ul className="navbar-nav">
          <li className = "nav-item"><a className="nav-link" href="#dishes">Recipes</a></li>
          <li className = "nav-item"><a className="nav-link" href="#home">Sign In</a></li>
        </ul>
      </div>  
    </nav>
  )
}

export default navbar;
