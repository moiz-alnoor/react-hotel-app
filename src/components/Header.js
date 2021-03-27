import React from 'react';
import logo from './../5340407521530272909-48.png';

// display hotel logo + number of romms has booked
export default function Header(props) {
  return (
    <header>
      <nav class="navbar shadow-sm p-3 mb-5 bg-white  rounded">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo" size="12" />
          Hotel
          </span>
        </div>
      </nav>
    </header>
  );
}