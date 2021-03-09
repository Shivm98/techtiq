import React from 'react';
import Styles from './HeroSection.module.scss';
import HeroImg from '../../../../assets/mobileappdevpage/images/mobile-app-dev-hero-img.png';

const HeroSection = () => {
    return (
        <header className={Styles.Hero}>
            <div className={Styles.Container}>
                <div className={Styles.HeroContent}>
                    <h2 className={Styles.HeadingSecondary}>Mobile Application Development</h2>
                    <p className={Styles.HeroImgContainer}>
                        Xamarin.Forms - Swift - Kotlin
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
