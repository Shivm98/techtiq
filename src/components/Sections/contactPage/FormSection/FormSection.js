import React from 'react';
import Form from './Form/Form';
import Underline from '../../../Underline/Underline';

import Styles from './FormSection.module.scss';

const FormSection = () => {
    return (
        <section className={Styles.FormSection}>
            <div className={Styles.Container}>
                <div className={Styles.Content}>
                    <h3 className={Styles.HeadingTertiary}>
                        Get in Touch
                    </h3>
                    <Underline/>
                    <h5>Let’s have a conversation to discuss your requirements.</h5>
                    <div className={Styles.Address}>
                        East Perth, WA, Australia
                    </div>
                    <div className={Styles.Contact}>
                        <span>Call us on:</span>
                        <span>+61 (424) 387 795</span>
                    </div>
                    <div className={Styles.Email}>
                        <span>Email us on:</span>
                        <span>info@techtiq.com.au</span>
                    </div>
                   
                </div>
                <Form/>
            </div>
        </section>
    )
}

export default FormSection;
