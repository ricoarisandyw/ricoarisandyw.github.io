import React from 'react';
import { Detail } from '../../detail';
import { Menu } from '../../menu';
import './SectionIntro.scss';

const SectionIntro: React.FC = () => {
    return (
        <div className="SectionIntro">
            <div className="bg-intro bg-blur" />
            <div className="content">
                <Menu />
                <Detail />
            </div>
        </div>
    );
};

export default SectionIntro;