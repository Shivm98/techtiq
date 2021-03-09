import React from 'react';
import BenefitsCard from '../../../Cards/BenefitsCard/BenefitsCard';
import Styles from './BenefitsSection.module.scss';

import benefits from '../../../../data/BenefitsCardData';

const BenefitsSection = () => {
    return (
        <section className={Styles.BenefitsSection}>
            <div className={Styles.Container}>
                <h5>Cloud-native technologies are used to develop applications built with services packaged in containers, deployed as microservices and managed on elastic infrastructure through agile DevOps processes and continuous delivery workflows.</h5>
                <div className={Styles.Underline}></div>

                <h2>
                    Benefits
                </h2>

                <div className={Styles.CardsContainer}>
                    {benefits.map(benefit => (
                        <BenefitsCard img={benefit.img} title={benefit.title} desc={benefit.desc}/>
                    ) )}
                </div>
            </div>

        </section>
    )
}

export default BenefitsSection;
