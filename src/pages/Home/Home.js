import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import ClientSection from '../../components/Sections/ClientSection/ClientSection';
import ExpertiseSection from '../../components/Sections/ExpertiseSection/ExpertiseSection';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import IntroSection from '../../components/Sections/IntroSection/IntroSection';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HeroSection/>
            <IntroSection/>
            <ExpertiseSection/>
            <ClientSection/>
        </div>
    )
}

export default Home;
