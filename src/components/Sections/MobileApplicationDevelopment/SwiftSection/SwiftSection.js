import React from 'react';
import FeaturesCard from '../../../Cards/FeaturesCard/FeaturesCard';

import Styles from './SwiftSection.module.scss';
import features from '../../../../data/swiftData';

const SwiftSection = () => {
    return (
        <section className={Styles.SwiftSection}>
            <div className={Styles.Container}>
                <h2>Swift</h2>
                <div className={Styles.Underline}></div>

                <h5>
Swift is a fast and efficient language that provides real-time feedback and can be seamlessly incorporated into existing Objective-C code. So developers are able to write safer, more reliable code, save time, and create even richer app experiences.</h5>

                <div className={Styles.CardsContainer}>
                    {features.map(feature => (
                        <FeaturesCard img={feature.img} title={feature.title} desc={feature.desc}/>
                    ) )}
                </div>
            </div>

        </section>
    )
}

export default SwiftSection;
