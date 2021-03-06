import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import DeliveryModelSection from '../../components/Sections/aboutPage/DeliveryModelSection/DeliveryModelSection';
import FeatureSection from '../../components/Sections/aboutPage/FeatureSection/FeatureSection';
import HeroSection from '../../components/Sections/aboutPage/HeroSection/HeroSection'

const About = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <FeatureSection/>
            <DeliveryModelSection/>
        </>
    )
}

export default About;
