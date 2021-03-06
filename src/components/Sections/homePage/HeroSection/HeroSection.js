import React from 'react';
import Styles from './HeroSection.module.scss';
import HeroImg from '../../../../assets/homepage/images/hero_svg.svg';

const HeroSection = () => {
    return (
        <header className={Styles.Hero}>
            <div className={Styles.Container}>
                <div className={Styles.HeroContent}>
                    <h2 className={Styles.HeadingSecondary}>Future-Ready Cloud Solutions</h2>
                    <p className={Styles.HeroImgContainer}>
                        <span>
                            <b>Increase performance, scale, compliance and capability within your business </b>
                        </span>
                        Let us help you simplify and accelerate your Azure cloud transformation journey.
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
