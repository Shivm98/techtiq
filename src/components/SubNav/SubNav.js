import React from 'react';
import {Link} from 'react-router-dom';
import SubNavData from '../../data/subMenu';
import Styles from './SubNav.module.scss';

const SubNav = (props) => {
  
    return (
        <div className={props.showNav ? `${Styles.SubNav} ${Styles.Active}`: `${Styles.SubNav}`}>
            <ul>
                {SubNavData.map(item => (
                    <li>
                        <Link to={`${item}`.split(' ').join('')}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubNav;
