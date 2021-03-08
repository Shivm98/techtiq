import React, {useState} from 'react';
import BtnForm from '../../../../Buttons/BtnForm/BtnForm';
import Styles from './Form.module.scss';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = () => {};

    return (
        <form onSubmit={submitHandler} className={Styles.Form}>
            <h3 className={Styles.HeadingTertiary}>
                Drop us a query and we will get back to you.
            </h3>
            
            <h4 className={Styles.InputHeading}>Name<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="firstname">First</label>
            </div>
            <div className={Styles.InputContainer}>
                <input id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <label htmlFor="lastname">Last</label>
            </div>

            <h4 className={Styles.InputHeading}>Email<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className={Styles.InputContainer}>
                <input id="confirmemail" type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
                <label htmlFor="confirmemail">Confirm Email</label>
            </div>

            <h4 className={Styles.TextAreaHeading}>Comment or Message<span>*</span></h4>
            <div className={Styles.TextAreaContainer}>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <BtnForm>Submit</BtnForm>
        </form>
    )
}

export default Form;
