import React from 'react'
import { connect } from 'react-redux'
import Page from '../../ComponentLibrary/Page'
import Grid from '../../ComponentLibrary/Grid'
import ContactCard from '../../ComponentLibrary/ContactCard'
import './styles.scss'

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}

const ContactListPage = (props) => {

    const { contacts } = props

    return (
        <Page title="Contact List">
            <div className="ContactListPage">
                <Grid>
                    {contacts.map(contact => {
                        return (
                            <ContactCard key={`${contact.first}--${contact.id}`} contact={contact}/>
                        )
                    })}
                </Grid>
            </div>
        </Page>
    )
}

export default connect(mapStateToProps)(ContactListPage)