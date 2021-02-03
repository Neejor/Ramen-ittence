import React from "react";

function navbar(props) {
  return (
    <div className={props.class} id="navbar">
      <div className="container-fluid ms-3 me-3 pt-2 pb-2">
        <a class="navbar-brand" href="http://localhost:4000/dishCatalogueDB">Ra-Main</a>
        <div className="nav-item">
          Sign In
        </div>
      </div>
      
    </div>
  )
}

export default navbar;
