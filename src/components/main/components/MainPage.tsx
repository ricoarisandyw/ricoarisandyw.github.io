import React from 'react';
import Footer from '../../core/Footer';
import Fullscreen from '../../core/Fullscreen';
import Header from '../../core/Header';
import SectionIntro from './SectionIntro';

const MainPage: React.FC = () => {
    return (
        <Fullscreen>
            <Header />
            <SectionIntro />
            <Footer /> 
        </Fullscreen>
    );
};

export default MainPage;