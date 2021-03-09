import React from 'react';
import Styles from './BenefitsCard.module.scss';

const BenefitsCard = (props) => {
    return (
        <article className={Styles.Card}>
            <div className={Styles.ImgContainer}>
                <img src={props.img} alt="icon"/>
            </div>
            <h4>
                {props.title}
            </h4>
            <p>{props.desc}</p>
        </article>
    )
}

export default BenefitsCard;
