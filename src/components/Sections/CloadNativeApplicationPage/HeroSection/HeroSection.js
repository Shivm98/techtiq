import React from 'react';
import Styles from './HeroSection.module.scss';
import HeroImg from '../../../../assets/cloudnativeapplicationpage/images/cloud-native-application-hero-img.png';

const HeroSection = () => {
    return (
        <header className={Styles.Hero}>
            <div className={Styles.Container}>
                <div className={Styles.HeroContent}>
                    <h2 className={Styles.HeadingSecondary}>Cloud Native application Development</h2>
                    <p>Application designed and developed natively for cloud</p>
                </div>
                <div className={Styles.HeroImgContainer}>
                   <img src={HeroImg} alt="Hero Img" />
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
