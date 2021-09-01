import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DisplayField  from '../DisplayField'
import './styles.scss'


const ContactCard = (props) => {
    const [ isExpanded, toggleExpand ] = useState(false)

    const { first, last, phone, email } = props.contact
    return (
        <div className="ContactCard">
            <div className="ContactCard__body">
                <div className="ContactCard__edit">
                    <div className="ContactCard__icon"><FontAwesomeIcon icon="edit"/></div>
                </div>
                <div className="ContactCard__title">{first} {last}</div>
                <DisplayField label="Phone Number:" value={phone}/>
                {isExpanded && <DisplayField label="Email Address:" value={email}/>}
            </div>

            <div className="ContactCard__toggle" onClick={() => toggleExpand(!isExpanded)}>
                {isExpanded ? "Show Less" : "Show More"}
                <div className="ContactCard__icon">
                    <FontAwesomeIcon icon={isExpanded ? "chevron-up" : "chevron-down"}/>
                </div>
            </div>
        </div>
    )
}

export default ContactCard