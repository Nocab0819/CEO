import React from 'react';
import '../Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img className="logo-pic" src="img/logo.png" alt="LOGO" />
            CEO
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="">
                  關於我們
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  學習資源
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  課程清單
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  
