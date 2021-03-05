import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import IntroSection from '../../components/Sections/IntroSection/IntroSection';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HeroSection/>
            <IntroSection/>
        </div>
    )
}

export default Home;
