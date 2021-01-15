import React from 'react';
import './Fullscreen.scss';

interface FullscreenProps {
    children: React.ReactNode
}

const Fullscreen: React.FC<FullscreenProps> = (props) => {
    return (
        <div className="Fullscreen d-flex flex-column">
            {props.children}
        </div>
    )
}

export default Fullscreen