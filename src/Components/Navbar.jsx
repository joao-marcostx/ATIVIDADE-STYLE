import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/products" style={linkStyle}>Produtos</Link></li>
        <li style={liStyle}><Link to="/Login" style={linkStyle}>Sair</Link></li>
      </ul>
    </nav>
  );
}


const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around',
};

const liStyle = {
  display: 'inline',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default Navbar;
