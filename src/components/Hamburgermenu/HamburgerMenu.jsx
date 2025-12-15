import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

function HamburgerMenu() {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="women" className="menu-item" href="/women">Women</a>
      <a id="men" className="menu-item" href="/men">Men</a>
      <a id="kids" className="menu-item" href="/kids">Kids & Babies</a>
      <a id="teenagers" className="menu-item" href="/teenagers">Teenagers</a>
      <a id="new" className="menu-item" href="/new">New Arrivals</a>
      <a id="sale" className="menu-item" href="/sale">Sale</a>
    </Menu>
  );
}

export default HamburgerMenu;