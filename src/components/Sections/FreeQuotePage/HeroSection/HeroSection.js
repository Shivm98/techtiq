import React from 'react';
import Styles from './HeroSection.module.scss';
import HeroImg from '../../../../assets/freequotepage/images/contact-hero-img.png';

const HeroSection = () => {
    return (
        <header className={Styles.Hero}>
            <div className={Styles.Container}>
                <div className={Styles.HeroContent}>
                    <h2 className={Styles.HeadingSecondary}>Free Quote</h2>
                </div>
                <div className={Styles.HeroImgContainer}>
                   <img src={HeroImg} alt="Hero Img" />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
