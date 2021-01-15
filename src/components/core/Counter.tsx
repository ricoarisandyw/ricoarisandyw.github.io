import React from 'react'
import './Counter.scss'

interface CounterProps {
    value: number
}

const Counter: React.FC<CounterProps> = (props) => {
    return (
        <div className="Counter">
            {props.value > 9 ? "9+" : props.value}
        </div>
    )
}

export default Counter