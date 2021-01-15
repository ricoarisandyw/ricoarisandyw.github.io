import React from 'react';
import './BoxIcon.scss';
import {GiAcorn} from 'react-icons/gi'
import Counter from '../../core/Counter';

const BoxIcon: React.FC = () => {
    return (
        <div className="BoxIcon">
            <Counter value={5} />
            <GiAcorn className="icon" />
        </div>
    )
}

export default BoxIcon