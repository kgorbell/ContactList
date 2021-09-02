import React from 'react'
import './styles.scss'


const Button = props => {
    const { label, click, purple, disabled } = props
    let className = "Button"
    if (purple) className += " Button--purple"
    if (disabled) className += " Button--disabled"
    
    return (
        <div className="Button" onClick={!disabled && click ? click : null}>
            {label}
        </div>
    )
}

export default Button