import React, { useState } from 'react';
import './Menu.scss';

function Menu({ clickedItem, setClickedItem }) {
  return (
    <div className="menu">
      <p
        className={
          clickedItem === 'Companies'
            ? 'menu__menu-item--underlined'
            : 'menu__menu-item'
        }
        onClick={() => {
          setClickedItem('Playlists');
        }}
      >
        Companies
      </p>
      <p
        className={
          clickedItem === 'Salaries'
            ? 'menu__menu-item--underlined'
            : 'menu__menu-item'
        }
        onClick={() => {
          setClickedItem('Stats');
        }}
      >
        Salaries
      </p>
    </div>
  );
}

export default Menu;
