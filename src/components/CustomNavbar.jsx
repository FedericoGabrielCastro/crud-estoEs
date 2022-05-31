import React from 'react';
import style from '../styles/components/CustomNavbarStyle.module.css';
import logo from '../assets/images/logo.png';

const CustomNavbar = () => {
    return (
        <nav className={style.customNavbar}>
            <img src={logo} alt="logo" className={style.imgLogo}/>
        </nav>
    );
};

export default CustomNavbar;
