import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setModalContent } from '../../redux/actions'
import DisplayField  from '../DisplayField'
import EditContactModal from '../EditContactModal'
import DeleteContactModal from '../DeleteContactModal'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        setModalContent: (content) => dispatch(setModalContent(content)), 
    }
}

const ContactCard = (props) => {
    const [ isExpanded, toggleExpand ] = useState(false)

    const handleOpenEditModal = () => {
        props.setModalContent(<EditContactModal contact={props.contact}/>)
    }

    const handleOpenDeleteModal = () => {
        props.setModalContent(<DeleteContactModal contact={props.contact}/>)
    }

    const { first, last, phone, email } = props.contact
    return (
        <div className="ContactCard">
            <div className="ContactCard__body">
                <div className="ContactCard__edit">
                    <div className="ContactCard__icon" onClick={handleOpenEditModal}>
                        <FontAwesomeIcon icon="edit"/>
                    </div>
                    <div className="ContactCard__icon" onClick={handleOpenDeleteModal}>
                        <FontAwesomeIcon icon="times"/>
                    </div>
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

export default connect(null, mapDispatchToProps)(ContactCard)