import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createContact } from '../../redux/actions'
import Input from '../../ComponentLibrary/Input'
import Button from '../../ComponentLibrary/Button'
import Page from '../../ComponentLibrary/Page'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        createContact: (contact) => dispatch(createContact(contact)),
    }
}

const CreateContactPage = (props) => {
    const [redirectTo, setRedirect] = useState(null)
    const [contact, updateContact] = useState({ })

    const handleUpdateContact = (value, name) => {
        updateContact({ ...contact, [name]: value })
    }

    const isContactValid = () => {
        return !!contact.first && !!contact.last && !!contact.phone && !!contact.email
    }

    const handleCreateContact = () => {
        props.createContact(contact)
        setRedirect("/")
    }

    return (
        <Page title="Create A Contact" isForm>

            {!!redirectTo && <Redirect to="/"/>}

            <div className="CreateContactPage">
                <Input
                    name="first" label="First Name" placeholder="Fist Name"
                    onUpdate={handleUpdateContact}
                />
                <Input
                    name="last" label="Last Name" placeholder="Last Name"
                    onUpdate={handleUpdateContact}
                />
                <Input
                    name="phone" label="Phone Number" placeholder="Phone Number"
                    onUpdate={handleUpdateContact}
                />
                <Input
                    name="email" label="Email Address" placeholder="Email Address"
                    onUpdate={handleUpdateContact}
                />
            </div>

            <div className="CreateContactPage__buttons">
                <Button label="Cancel" click={() => setRedirect("/")}/>
                <Button purple disabled={!isContactValid()} label="Create Contact" click={handleCreateContact}/>
            </div>
        </Page>
    )
}

export default connect(null, mapDispatchToProps)(CreateContactPage)