import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "./Container";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img src={logo} />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/projects">Projetos</Link>
          </li>
          <li className="item">
            <Link to="/company">Empresa</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
