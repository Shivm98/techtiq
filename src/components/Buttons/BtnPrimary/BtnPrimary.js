import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './BtnPrimary.module.scss';

const BtnPrimary = (props) => {
    return (
        <Link to='#' className={Styles.Btn}>
            {props.children}
        </Link>
    )
}

export default BtnPrimary;
