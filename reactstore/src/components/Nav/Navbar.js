import React from 'react'
import "./Navbar.css"
// import {Link} from 'react-router-dom';

export default function Navbar() {
    const menu=(e) => {
        let menu = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');
        
        menu.onclick = () => {
          menu.classList.toggle('bx-x');
          navbar.classList.toggle('open');
        }
      }
  return (
    <div>
      <header>
            <a href='#' className='logo'><i class="ri-home-7-line"></i><span>Logo</span></a>
            <ul className='navbar'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>

            <div className='main'>
                <div className='bx bx-menu' id="menu-icon" onClick={menu}></div>
            </div>
        </header>
    </div>
  )
}
