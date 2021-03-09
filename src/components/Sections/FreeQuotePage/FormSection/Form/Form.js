import React, {useState} from 'react';
import BtnForm from '../../../../Buttons/BtnForm/BtnForm';
import Styles from './Form.module.scss';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [intrestedInServices] = useState();
    

    const submitHandler = () => {};

    return (
        <form onSubmit={submitHandler} className={Styles.Form}>            
            <h4 className={Styles.InputHeading}>Name<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="firstname">First</label>
            </div>
            <div className={Styles.InputContainer}>
                <input id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <label htmlFor="lastname">Last</label>
            </div>

            <h4 className={Styles.InputHeading}>Business Email<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className={Styles.InputContainer}>
                <input id="confirmemail" type="text" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
                <label htmlFor="confirmemail">Confirm Email</label>
            </div>

            <h4 className={Styles.InputHeading}>Company Name<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="companyname" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            </div>

            <h4 className={Styles.InputHeading}>Website URL<span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="websiteURL" type="text" value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)}/>
            </div>

            <h4 className={Styles.InputHeading}>Contact Number <span>*</span></h4>
            <div className={Styles.InputContainer}>
                <input id="contactno" type="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
            </div>

            <h4 className={Styles.InputHeading}>Company Size <span>*</span></h4>
            <div className={Styles.InputContainer}>
                <select name="companysize" id="companysize">
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-200">101-200</option>
                    <option value="200+">200+</option>
                </select>
            </div>

            <h4 className={Styles.InputHeading}>What services are you interested in ?  <span>*</span></h4>
            <div className={Styles.CheckBoxContainer}>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> Azure</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                <label for="vehicle2"> Cloud Native Application Development </label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3"> Mobile Application Development</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3"> IoT Solution</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3"> DevOps Quality Services</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3">Cybersecurity</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3">Governance and Control</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3">AI, Analytics & Machine Learning</label><br/>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                <label for="vehicle3">Hybrid Cloud Solutions</label><br/>
            </div>
            
            <BtnForm>Submit</BtnForm>
        </form>
    )
}

export default Form;
