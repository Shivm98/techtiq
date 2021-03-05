import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './ExpertiseCard.module.scss';


const ExpertiseCard = (props) => {
    return (
        <article className={Styles.Card}>
            <div className={Styles.ImgContainer}>
                <img src={props.img} alt="icon"/>
            </div>
            <h4>
                <Link to='/'>{props.title}</Link>
            </h4>
            <p>{props.desc}</p>
        </article>
    )
}

export default ExpertiseCard;
