import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ClientSection from '../../components/Sections/ClientSection/ClientSection';
import ContactSection from '../../components/Sections/ContactSection/ContactSection';
import ExpertiseSection from '../../components/Sections/ExpertiseSection/ExpertiseSection';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import IntroSection from '../../components/Sections/IntroSection/IntroSection';
import MicrosoftPartnerSection from '../../components/Sections/MicrosoftPartnerSection/MicrosoftPartnerSection';

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
        </div>
    )
}

export default Home;
