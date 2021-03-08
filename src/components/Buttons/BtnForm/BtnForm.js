import React from 'react';
import Styles from './BtnForm.module.scss';

const BtnForm = (props) => {
    return (
        <button type="submit" className={Styles.Btn}>
            {props.children}
        </button>
    )
}

export default BtnForm;
