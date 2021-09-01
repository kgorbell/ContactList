import React from 'react'
import './styles.scss'


const DisplayField = (props) => {
    const { label, value } = props
    return (
        <div className="DisplayField">
            <div className="DisplayField__label">{label}</div>
            <div className="DisplayField__value">{value}</div>
        </div>
    )
}

export default DisplayField