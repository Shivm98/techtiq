import React,{useState} from 'react';
import NavItems from './NavItems/NavItems';
import Styles from './Navigation.module.scss';
import logoWhite from '../../assets/logo.png';
import logoBlue from '../../assets/logo-blue.png';

const Navigation = () => {
    const [navFix, setNavFix] = useState(false);

    const changeNavBg = () => {
        if(window.scrollY >= 500){
            setNavFix(true);
        }else{
            setNavFix(false);
        };
    };

    window.addEventListener('scroll', changeNavBg);

    return (
        <nav className={navFix ? `${Styles.Navigation} ${Styles.White}`: `${Styles.Navigation}`}>
            <div className={Styles.NavContainer}>
                <div className={Styles.Logo}>
                    {navFix ? <img src={logoBlue} alt='logo'/>: <img src={logoWhite} alt='logo'/>}
                </div>
                <NavItems/>
            </div>
        </nav>
    )
}

export default Navigation;
