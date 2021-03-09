import React from 'react';
import FeaturesCard from '../../../Cards/FeaturesCard/FeaturesCard';

import Styles from './FeatureSection.module.scss';
import features from '../../../../data/FeaturesCardData';

const FeatureSection = () => {
    return (
        <section className={Styles.FeatureSection}>
            <div className={Styles.Container}>
                <h2>Xamarin.Forms </h2>
                <div className={Styles.Underline}></div>

                <h5>An open-source framework for building iOS, Android, and Windows apps</h5>

                <div className={Styles.CardsContainer}>
                    {features.map(feature => (
                        <FeaturesCard img={feature.img} title={feature.title} desc={feature.desc}/>
                    ) )}
                </div>
            </div>

        </section>
    )
}

export default FeatureSection;
