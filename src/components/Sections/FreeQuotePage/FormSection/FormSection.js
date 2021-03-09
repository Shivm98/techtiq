import React from 'react'
import Form from './Form/Form';
import Styles from './FormSection.module.scss';
const FormSection = () => {
    return (
        <section className={Styles.FormSection}>
            <div className={Styles.Container}>
                <div className={Styles.Head}>
                    <h2 className={Styles.HeadingSecondary}>
                        Quote request form
                    </h2>
                    <div className={Styles.Underline}></div>
                    <p className={Styles.SubHeading}>
                        Please fill out the form below, selecting the services you are interested in, to receive a free quote from our sales team.
                    </p>
                </div>
                <Form/>
            </div>
        </section>
    )
}

export default FormSection
