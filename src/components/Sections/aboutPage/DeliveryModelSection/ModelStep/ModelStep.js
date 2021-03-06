import React from 'react';
import CheckImg from '../../../../../assets/aboutpage/images/about-check-circle.png';
import Styles from './ModelStep.module.scss';

const ModelStep = (props) => {
    return (
        <div className={Styles.ModelStep}>
            <h5 className={Styles.Heading}>
                <img src={CheckImg} alt="Check Icon"/>
                <span>{props.heading}</span>
            </h5>
            <p className={Styles.Desc}>
                {props.children}
            </p>
        </div>
    )
}

export default ModelStep
