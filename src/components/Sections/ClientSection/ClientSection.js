import React from 'react';
import Styles from './ClientSection.module.scss';
import ClientData from '../../../data/clientData';

const ClientSection = () => {
    return (
        <section className={Styles.ClientSection}>
            <div className={Styles.Heading}>
                <h3>Who We are Working With</h3>
            </div>
            <div className={Styles.Container}>
                {ClientData.map(item => (
                    <div className={Styles.ImgContainer}>
                        <img src={item} alt="client"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ClientSection;
