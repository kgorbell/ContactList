import React, { useState } from 'react'
import './styles.scss'


const Input = props => {
    const { label, placeholder, initialVal, name, onUpdate, autofocus } = props
    const [ value, updateValue ] = useState(initialVal || null)

    const handleChange = (event) => {
        const val = event.target.value
        updateValue(val)
        onUpdate(val, name)
    }

    return (
        <div className="Input">
            <div className="Input__label">{label}</div>
            <input 
                className="Input__field"
                placeholder={placeholder ? placeholder : ""}
                value={value ? value : ""}
                onChange={(event) => handleChange(event)}
                autoFocus={!!autofocus}
            />
        </div>
    )
}

export default Input