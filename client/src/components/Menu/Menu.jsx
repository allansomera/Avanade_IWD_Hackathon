import { useState } from 'react';
import './Menu.scss';

const Menu = ({ clickedItem, setClickedItem }) => {
  return (
    <>
      <div className="menu">
        <p
          className={
            clickedItem === 'Companies'
              ? 'menu__menu-item--underlined'
              : 'menu__menu-item'
          }
          onClick={() => {
            setClickedItem('Companies');
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
            setClickedItem('Salaries');
          }}
        >
          Salaries
        </p>
      </div>
    </>
  );
};

export default Menu;
