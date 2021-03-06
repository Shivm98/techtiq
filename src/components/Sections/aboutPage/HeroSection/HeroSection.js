import React from 'react';
import Styles from './HeroSection.module.scss';
import HeroImg from '../../../../assets/aboutpage/images/about-hero-img.png';

const HeroSection = () => {
    return (
        <header className={Styles.Hero}>
            <div className={Styles.Container}>
                <div className={Styles.HeroContent}>
                    <h2 className={Styles.HeadingSecondary}>About us</h2>
                    <p className={Styles.HeroImgContainer}>
                        TechtiQ is an Australian IT company based in Perth specialising in implementing innovative cloud based transformations for small, medium and large enterprise.
                    </p>
                </div>
                <div className={Styles.HeroImgContainer}>
                   <img src={HeroImg} alt="Hero Img"/>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
