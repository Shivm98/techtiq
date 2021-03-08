import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import FormSection from '../../components/Sections/contactPage/FormSection/FormSection';
import HeroSection from '../../components/Sections/contactPage/HeroSection/HeroSection';
import MapSection from '../../components/Sections/contactPage/MapSection/MapSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';

const Contact = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <FormSection/>
            <MapSection/>
            <Footer/>
        </>
    )
}

export default Contact;
