import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import FormSection from '../../components/Sections/FreeQuotePage/FormSection/FormSection';
import HeroSection from '../../components/Sections/FreeQuotePage/HeroSection/HeroSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';

const FreeQuote = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <FormSection/>
            <Footer/>
        </>
    )
}

export default FreeQuote;
