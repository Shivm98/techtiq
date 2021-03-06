import React from 'react';
import IntroCard from '../../../Cards/IntroCard/IntroCard';
import Styles from './IntroSection.module.scss';

import AzureImg from '../../../../assets/homepage/images/azure-icon-home.svg';
import biImg from '../../../../assets/homepage/images/bi.svg';
import CustomSoftwareSolutionsImg from '../../../../assets/homepage/images/custom-software-solution.svg';

const IntroSection = () => {
    return (
        <section className={Styles.IntroSection}>
            <div className={Styles.Container}>
                <div className={Styles.CardStack}>
                    <IntroCard 
                        img={AzureImg} 
                        title='Azure  Migration' 
                        desc='By identifying workloads and applications that can be easily shifted, we can provide immediate cost savings and efficiency.'/>
                    <IntroCard
                        img={biImg} 
                        title='Business Intelligence' 
                        desc='Giving you accurate, meaningful and timely insight into your businesses operations.'/>
                </div>
                <div className={Styles.CardSingle}>
                    <IntroCard 
                        img={CustomSoftwareSolutionsImg} 
                        title='Custom Software Solutions' 
                        desc='We create rich solutions leveraging the latest cloud technology, that will elevate your business experience.'/>
                </div>
                <div className={Styles.Content}>
                    <div className={Styles.Article}>
                        <h3>Empower your business. Shift to a cloud core.</h3>
                        <p>Rigid businesses are unable to innovate fast and meet market changes, cybersecurity threats are always on the rise and on-premise data centers are fragile.</p>
                        <p>From detailed assessments to executable migration blue prints and support planning, Techtiq is here to support you,<span> no matter where you are within your digital transformation journey.</span></p>
                    </div>
                </div>             
            </div>
        </section>
    )
}

export default IntroSection;
