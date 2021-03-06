import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ClientSection from '../../components/Sections/homePage/ClientSection/ClientSection';
import ContactSection from '../../components/Sections/homePage/ContactSection/ContactSection';
import ExpertiseSection from '../../components/Sections/homePage/ExpertiseSection/ExpertiseSection';
import Footer from '../../components/Sections/homePage/Footer/Footer';
import HeroSection from '../../components/Sections/homePage/HeroSection/HeroSection';
import IntroSection from '../../components/Sections/homePage/IntroSection/IntroSection';
import MicrosoftPartnerSection from '../../components/Sections/homePage/MicrosoftPartnerSection/MicrosoftPartnerSection';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HeroSection/>
            <IntroSection/>
            <ExpertiseSection/>
            <ClientSection/>
            <MicrosoftPartnerSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default Home;
