import React,{useState} from 'react';
import SubNav from '../../SubNav/SubNav';
import NavItem from './NavItem/NavItem';
import Styles from './NavItems.module.scss';

const NavItems = () => {
      const [showNav, setShowNav] = useState(false);

    const toggleShowNav = () => {
        setShowNav(prevState => {
            return !prevState;
        });
    };

    return (
        <ul className={Styles.NavItems}>
            <NavItem link='/' >Home</NavItem>
            <NavItem link='/services' toggleShowNav={toggleShowNav}>
                Services
                <SubNav showNav={showNav}/>
            </NavItem>
            <NavItem link='/freequote' >Free Quote</NavItem>
            <NavItem link='/contact' >Contact</NavItem>
            <NavItem link='/about' >About Us</NavItem>
        </ul>
    )
}

export default NavItems;
