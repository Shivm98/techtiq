import React from 'react';
import FeaturesCard from '../../../Cards/FeaturesCard/FeaturesCard';

import Styles from './KotlinSection.module.scss';
import features from '../../../../data/kotlinData';

const KotlinSection = () => {
    return (
        <section className={Styles.KotlinSection}>
            <div className={Styles.Container}>
                <h2>Kotlin</h2>
                <div className={Styles.Underline}></div>

                <h5>A modern programming language that makes developers happier.</h5>

                <div className={Styles.CardsContainer}>
                    {features.map(feature => (
                        <FeaturesCard img={feature.img} title={feature.title} desc={feature.desc}/>
                    ) )}
                </div>
            </div>

        </section>
    )
}

export default KotlinSection;
