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
        <Page>
            <div className="ContactListPage">
                <Grid>
                    {contacts.map((contact, i) => {
                        const { first, last } = contact
                        return (
                            <ContactCard key={`${first}-${last}--${i}`} contact={contact}/>
                        )
                    })}
                </Grid>
            </div>
        </Page>
    )
}

export default connect(mapStateToProps)(ContactListPage)