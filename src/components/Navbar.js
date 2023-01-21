import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
    
    <a className="navbar-brand" href="/">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      </ul>
      <div className={`custom-control custom-switch text-${prop.mode === 'light'?'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" onClick={prop.toggle} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">{prop.mode === 'light'?'Enable Dark Mode':'Disable Dark Mode'}</label>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string,
    about:PropTypes.string
}

// Is required for catching error if we dont give text
// Navbar.propTypes={
//     title: PropTypes.string.isRequired,
//     about:PropTypes.string.isRequired
// }

Navbar.defaultProps={
    title: "Set Title here",
    about:"Set About here"
}