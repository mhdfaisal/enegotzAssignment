import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ logoUrl, brandText, linkURL }) => {
  return (
    <Navbar bg="primary" variant="dark">
        <Link to={linkURL}>
        <Navbar.Brand>
          <img
            alt=""
            src={logoUrl}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {brandText}
        </Navbar.Brand>
        </Link>
    </Navbar>
  );
};

export default NavigationBar;
