import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './NavItem.module.scss';


const NavItem = (props) => {
    return (
        <li 
            className={Styles.NavItem} 
            onMouseLeave={props.toggleShowNav}
            onMouseEnter={props.toggleShowNav}>
            <NavLink 
                className={Styles.Link}
                to={props.link}
                exact
                activeClassName={Styles.active}>
                    {props.children}
            </NavLink>
        </li>
    )
}

export default NavItem;
