import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      {/* <a href="#" className="link">Cursos</a> */}
      <div className="pesquisa-container">
        <img src='public/lupa.png' alt="Icone de busca" className="icon" />
        <input
          type="text"
          placeholder="Nome do curso"
          className="pesquisa-input"
        />
      </div>
    </div>
  );
};

export default Header;