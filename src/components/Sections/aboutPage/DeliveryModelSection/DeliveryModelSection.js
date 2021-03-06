import React from 'react';
import Underline from '../../../Underline/Underline';
import ModelStep from './ModelStep/ModelStep';

import Styles from './DeliveryModelSection.module.scss';
import ProcessImg1 from '../../../../assets/aboutpage/images/about-process-img1.jpg';
import ProcessImg2 from '../../../../assets/aboutpage/images/about-process-img2.jpg';

const DeliveryModelSection = () => {
    return (
        <section className={Styles.DeliveryModelSection}>
            <div className={Styles.Container}>
                <div className={Styles.Card1}>
                    <h4 className={Styles.Title}>Our project delivery model</h4>
                    <Underline/>
                    <ModelStep heading="initiation">
                        We assess your process, infrastructure and platforms to clearly understand your current state, engaging collaboratively with your staff all the way. Business expectations are understood. Project team identified.
                    </ModelStep>
                    <ModelStep heading="Planning">
                       Fine tune the scope, develop detailed agile plans that will deliver success.
                    </ModelStep>
                </div>
                <div className={Styles.Card2}>
                    <div className={Styles.ImgContainer}>
                        <img src={ProcessImg1} alt="process img1"/>
                    </div>
                     <ModelStep heading=" Execution​">
                       Close out detailed analysis and design, develop solutions, test, train and release to production, continuously testing for success.
                    </ModelStep>
                     <ModelStep heading="Close">
                      Deliver the final solution to the business. We will also be providing post go live support.
                    </ModelStep>
                </div>
                <div className={Styles.Card3}>
                    <div className={Styles.ImgContainer}>
                        <img src={ProcessImg2} alt="process img2"/>
                    </div>
                     <ModelStep heading="Realisation">
                      Post implementation review, lessons learnt activities and business benefits assessment.We don’t stop just because the project is over!
                    </ModelStep>
                </div>
            </div>
        </section>
    )
}

export default DeliveryModelSection;
