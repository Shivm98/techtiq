import React from 'react';
import Styles from './MapSection.module.scss';

const MapSection = () => {
    return (
        <section className={Styles.MapSection}>
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Perth&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near" title="Perth" aria-label="Perth"></iframe>
        </section>
    )
}

export default MapSection;
