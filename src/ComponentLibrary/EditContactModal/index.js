import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateContact, setModalContent } from '../../redux/actions'
import SuccessModal from '../SuccessModal'
import Button from '../Button'
import Input from '../Input'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        setModalContent: (content) => dispatch(setModalContent(content)),
        updateContact: (contact) => dispatch(updateContact(contact)),
    }
}

const EditContactModal = props => {

    const [ contact, updateContact ] = useState(props.contact)

    const handleUpdateContact = (value, name) => {
        let newContact = { ...contact }
        newContact[name] = value
        updateContact(newContact)
    }

    const handleSubmit = () => {
        props.updateContact(contact)
        props.setModalContent(<SuccessModal title="Great Success!" body={`Successfully Updated Contact, ${contact.first} ${contact.last}`}/>)
    }

    const { first, last, email, phone} = props.contact
    return (
        <div className="EditContactModal">
            <h3 className="EditContactModal__title">Edit contact: {first} {last}</h3>
            
            <Input 
                name="first" label="First Name" initialVal={first}
                onUpdate={handleUpdateContact}
            />
            <Input 
                name="last" label="Last Name" initialVal={last}
                onUpdate={handleUpdateContact}
            />
            <Input 
                name="phone" label="Phone Number" initialVal={phone}
                onUpdate={handleUpdateContact}
            />
            <Input 
                name="email" label="Email" initialVal={email}
                onUpdate={handleUpdateContact}
            />
            
            <div className="EditContactModal__buttons">
                <Button label="Cancel" click={props.clearModalContent}/>
                <Button purple label="Update Contact" click={handleSubmit}/>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(EditContactModal)