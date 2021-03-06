import React from 'react';
import Styles from './MicrosoftPartnerSection.module.scss';
import MicrosoftPartner from '../../../../assets/homepage/images/microsoftPartnerImg.png'

const MicrosoftPartnerSection = () => {
    return (
        <section className={Styles.Container}>
            <div className={Styles.ImgContainer}>
                <img src={MicrosoftPartner} alt="microsoft partner"/>
            </div>
        </section>
    )
}

export default MicrosoftPartnerSection;
