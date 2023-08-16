import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TÊNIS BOM</div>
      <ul className="navbar-categories">
         <li><a href="#">Início</a></li>
        <li><a href="#">Tênis casuais</a></li>
        <li><a href="#">Tênis esportivos</a></li>
        <li><a href="#">Masculino</a></li>
        <li><a href="#">Feminino</a></li>
        <li><a href="#">Infantil</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;