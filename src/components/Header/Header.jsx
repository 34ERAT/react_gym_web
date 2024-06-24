import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
export default function Header(){
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>programmes</li>
        <li>Why us</li>
        <li>plans</li>
        <li>TEstimonials</li>
      </ul>
    </div>
  );
}
