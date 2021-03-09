import React from 'react';
import HeroSection from '../../components/Sections/CloadNativeApplicationPage/HeroSection/HeroSection';
import Navigation from '../../components/Navigation/Navigation';
import BenefitsSection from '../../components/Sections/CloadNativeApplicationPage/BenefitsSection/BenefitsSection';
import ImplementationSection from '../../components/Sections/CloadNativeApplicationPage/ImplementationSection/ImplementationSection';
import ContactSection from '../../components/Sections/homePage/ContactSection/ContactSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';


const CloudNativeApplicationDevelopment = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <BenefitsSection/>
            <ImplementationSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

export default CloudNativeApplicationDevelopment;
