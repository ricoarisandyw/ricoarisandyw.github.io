import React from 'react'
import BoxIcon from './BoxIcon'
import './Detail.scss'
import {MdClose} from 'react-icons/md'

const Detail: React.FC = () => {
    return (
        <div className="Detail">
            <MdClose className="close" />
            <h1>Detail Item</h1>
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