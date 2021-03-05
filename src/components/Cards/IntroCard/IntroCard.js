import React from 'react';
import Styles from './IntroCard.module.scss';


const IntroCard = (props) => {
    return (
        <article className={Styles.Card}>
            <div className={Styles.ImgContainer}>
                <img src={props.img} alt={props.title}/>
            </div>
            <h3 className={Styles.Title}>
                {props.title}
            </h3>
            <p className={Styles.Description}>
                {props.desc}
            </p>
        </article>
    )
}

export default IntroCard
