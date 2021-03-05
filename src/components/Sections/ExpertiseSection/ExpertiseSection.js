import React from 'react';
import ExpertiseCard from '../../Cards/ExpertiseCard/ExpertiseCard';
import Styles from './ExpertiseSection.module.scss';
import ExpertiseData from '../../../data/expertise';

const ExpertiseSection = () => {
    return (
        <section className={Styles.ExpertiseSection}>
            <div className={Styles.Container}>
                <div className={Styles.Heading}>
                    <h3>Areas of Expertise</h3>
                    <p>As a Microsoft Gold Partner, our consulting practice caters for small to large enterprise cloud transformations by leveraging the best-of-breed technologies. </p>
                </div>
                <div className={Styles.CardsContainer}>
                    {ExpertiseData.map(item => (
                        <ExpertiseCard img={item.img} title={item.title} desc={item.desc}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection;
