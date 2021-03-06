import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import AlternateSection from '../../components/Sections/aboutPage/AlternateSection/AlternateSection';
import DeliveryModelSection from '../../components/Sections/aboutPage/DeliveryModelSection/DeliveryModelSection';
import EngageTitle from '../../components/Sections/aboutPage/EngageTitle/EngageTitle';
import FeatureSection from '../../components/Sections/aboutPage/FeatureSection/FeatureSection';
import HeroSection from '../../components/Sections/aboutPage/HeroSection/HeroSection';
import ContactSection from '../../components/Sections/homePage/ContactSection/ContactSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';

const About = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <FeatureSection/>
            <DeliveryModelSection/>
            <EngageTitle/>
            <AlternateSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

export default About;
