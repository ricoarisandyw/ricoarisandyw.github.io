import React from 'react';
import './Menu.scss';
import {VscBeaker} from 'react-icons/vsc';
import {GiSwordArray, GiAchievement, GiDualityMask, GiMusicalScore} from 'react-icons/gi';

const Menu: React.FC = () => {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <span className="icon">
                        <VscBeaker />
                    </span>
                    Skills
                </li>
                <li>
                    <span className="icon">
                        <GiSwordArray />
                    </span>
                    Weapons
                </li>
                <li>
                    <span className="icon">
                        <GiAchievement />
                    </span>
                    Artifacts
                </li>
                <li>
                    <span className="icon">
                        <GiMusicalScore />
                    </span>
                    Talents
                </li>
                <li>
                    <span className="icon">
                        <GiDualityMask />
                    </span>
                    Profile
                </li>
            </ul>
        </div>
    )
}

export default Menu