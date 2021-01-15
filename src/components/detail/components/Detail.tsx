import React from 'react'
import BoxIcon from './BoxIcon'
import './Detail.scss'
import {MdClose} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { actionShowDetail } from '../action'
import { RootState } from '../../../rootReducer'
import { MenuState } from '../../menu/reducer'

const Detail: React.FC = () => {
    const dispatch = useDispatch()

    const {selectedMenu} = useSelector<RootState, MenuState>((state) => state.menu)

    return (
        <div className="Detail">
            <MdClose className="close" onClick={() => dispatch(actionShowDetail(false))} />
            <h1>{selectedMenu}</h1>
            <b>Sub detail title</b>
            <hr />
            <div className="description">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, deserunt necessitatibus suscipit ipsam laboriosam odit enim consequuntur expedita fuga vero fugiat dignissimos delectus omnis est eligendi ipsum iure nisi tempora.
                </p>
            </div>
            <hr />
            <h3>Detail Item</h3>
            <div className="items">
                {
                    [1,2,3].map((val) => <BoxIcon key={"boxIcon_"+val} />)
                }
            </div>
        </div>
    )
}

export default Detail