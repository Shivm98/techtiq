import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import Underline from '../../../Underline/Underline';
import Styles from './FeatureSection.module.scss';
import Img from '../../../../assets/aboutpage/images/about-feature-img.jpg';

const FeatureSection = () => {
    return (
        <section className={Styles.FeatureSection}>
            <div className={Styles.Container}>
                <div className={Styles.ImgContainer}>
                    <img src={Img} alt='icon'/>
                </div>
                <div className={Styles.Content}>
                    <h4>We are a bunch of innovative, enthusiastic & creative minds</h4>
                    <p><strong>Behrad Izadi, Founder,</strong> launched TechTiQ with the intention to revolutionise the way Enterprises do business. Having worked with numerous local, national and global clients, our primary focus is to ensure your company can leverage our expertise in the everchanging technology landscape.</p>
                    <p>Our team includes – </p>
                    <ul>
                        <li><BiRightArrowCircle/><span>Executive Consultants</span></li>
                        <li><BiRightArrowCircle/><span>Enterprise Architects</span></li>
                        <li><BiRightArrowCircle/><span>Cloud Solution Architects</span></li>
                        <li><BiRightArrowCircle/><span>Project Managers</span></li>
                        <li><BiRightArrowCircle/><span>Certified DevOps and Kubernetes experts</span></li>
                    </ul>
                    <Underline/>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
