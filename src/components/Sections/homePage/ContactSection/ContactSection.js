import React from 'react';
import BtnPrimary from '../../../Buttons/BtnPrimary/BtnPrimary';
import Styles from './ContactSection.module.scss';

const ContactSection = () => {
    return (
        <section className={Styles.ContactSection}>
            <div className={Styles.Container}>
                <div className={Styles.Content}>
                    <h2>
                        Interested ?
                        <br/>
                        <br/>
                         Contact us
                    </h2>
                    <p>Please fill in the form and one of our sales executive will reach out to you with your requirements.</p>
                </div>
                <div className={Styles.BtnContainer}>
                    <BtnPrimary>Contact us</BtnPrimary>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
