import React from 'react';
import NavItem from './NavItem/NavItem';
import Styles from './NavItems.module.scss';

const NavItems = () => {
    return (
        <ul className={Styles.NavItems}>
            <NavItem link='/' >Home</NavItem>
            <NavItem link='/services' >Services</NavItem>
            <NavItem link='/freequote' >Free Quote</NavItem>
            <NavItem link='/contact' >Contact</NavItem>
            <NavItem link='/about' >About Us</NavItem>
        </ul>
    )
}

export default NavItems;
