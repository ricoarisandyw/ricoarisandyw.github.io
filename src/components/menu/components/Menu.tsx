import React from 'react';
import './Menu.scss';
import {VscBeaker} from 'react-icons/vsc';
import {GiSwordArray, GiAchievement, GiDualityMask, GiMusicalScore} from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { actionShowDetail } from '../../detail/action';
import { actionUpdateMenu } from '../action';
import { MenuList } from '../constants/MenuList';

const Menu: React.FC = () => {
    const dispatch = useDispatch()

    const showDetail = (selectedMenu: string) => {
        dispatch(actionShowDetail(true))
        dispatch(actionUpdateMenu(selectedMenu))
    }

    return (
        <div className="Menu">
            <ul>
                <li onClick={() => showDetail(MenuList.Skills)}>
                    <span className="icon">
                        <VscBeaker />
                    </span>
                    Skills
                </li>
                <li onClick={() => showDetail(MenuList.Weapons)}>
                    <span className="icon">
                        <GiSwordArray />
                    </span>
                    Weapons
                </li>
                <li onClick={() => showDetail(MenuList.Artifacts)}>
                    <span className="icon">
                        <GiAchievement />
                    </span>
                    Artifacts
                </li>
                <li onClick={() => showDetail(MenuList.Talents)}>
                    <span className="icon">
                        <GiMusicalScore />
                    </span>
                    Talents
                </li>
                <li onClick={() => showDetail(MenuList.Profile)}>
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