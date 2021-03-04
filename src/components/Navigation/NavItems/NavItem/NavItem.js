import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './NavItem.module.scss';


const NavItem = (props) => {
    return (
        <li className = {Styles.NavItem}>
            <NavLink 
                to={props.link}
                activeClassName={Styles.active}>
                    {props.children}
            </NavLink>
        </li>
    )
}

export default NavItem;
