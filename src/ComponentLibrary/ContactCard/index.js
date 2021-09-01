import React from 'react'
import './styles.scss'


const ContactCard = (props) => {
    const { first, last, phone, email } = props.contact
    return (
        <div className="ContactCard">
            <div className="ContactCard__title">{first} {last}</div>
        </div>
    )
}

export default ContactCard