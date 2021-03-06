import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Footer.module.scss';
import logoWhite from '../../../../assets/homepage/images/logo.png';

const Footer = () => {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Container}>
                <div className={Styles.LogoContainer}>
                    <h6>
                        <Link to='#'>
                            Email: info@techtiq.com.au
                        </Link>
                    </h6>
                    <div className={Styles.LogoContainer}>
                        <img src={logoWhite} alt="logo"/>
                    </div>
                </div>
                <div className={Styles.LinksContainer}>
                    <h6> 
                        Privacy Policy | Terms of Service
                    </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
