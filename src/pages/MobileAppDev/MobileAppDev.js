import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import DemoSection from '../../components/Sections/MobileApplicationDevelopment/DemoSection/DemoSection';
import FeatureSection from '../../components/Sections/MobileApplicationDevelopment/FeatureSection/FeatureSection';
import HeroSection from '../../components/Sections/MobileApplicationDevelopment/HeroSection/HeroSection';
import KotlinSection from '../../components/Sections/MobileApplicationDevelopment/KotlinSection/KotlinSection';
import SwiftSection from '../../components/Sections/MobileApplicationDevelopment/SwiftSection/SwiftSection';

import ContactSection from '../../components/Sections/homePage/ContactSection/ContactSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';


const MobileAppDev = () => {
    return (
        <>
            <Navigation/>
            <HeroSection/>
            <FeatureSection/>
            <DemoSection/>
            <SwiftSection/>
            <KotlinSection/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

export default MobileAppDev;
