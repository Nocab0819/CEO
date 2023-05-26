import React from 'react';
import '../Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href=""><img className="logo-pic" src="img/CEOlogo.png" alt="LOGO"/>&ensp;&ensp;&ensp;CEO首席教育</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">關於我們</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">學習資源</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">課程清單</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
  };
  
  export default Navbar;  