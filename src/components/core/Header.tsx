import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark Header">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Rico</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    );
}; 

export default Header;