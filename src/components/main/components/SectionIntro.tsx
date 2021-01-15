import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../rootReducer';
import { Detail } from '../../detail';
import { DetailState } from '../../detail/reducer';
import { Menu } from '../../menu';
import './SectionIntro.scss';

const SectionIntro: React.FC = () => {
    const {showDetail} = useSelector<RootState, DetailState>((state) => state.detail)
    return (
        <div className="SectionIntro">
            <div className={["bg-intro", showDetail ? "bg-blur": ""].join(' ')} />
            <div className="content">
                <Menu />
                {showDetail && <Detail />}
            </div>
        </div>
    );
};

export default SectionIntro;