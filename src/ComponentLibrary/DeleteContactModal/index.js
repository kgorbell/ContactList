import React from 'react'
import { connect } from 'react-redux'
import { setModalContent, clearModalContent, deleteContact } from '../../redux/actions'
import Button from '../Button'
import SuccessModal from '../SuccessModal'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        setModalContent: (content) => dispatch(setModalContent(content)),
        clearModalContent: () => dispatch(clearModalContent()),
        deleteContact: (id) => dispatch(deleteContact(id)),
    }
}

const DeleteContactModal = props => {
    const { first, last, id } = props.contact

    const handleDelete = () => {
        props.deleteContact(id)
        props.setModalContent(<SuccessModal title="Great Success!" body={`Successfully deleted contact: ${first} ${last}`}/>)
    }
    
    return (
        <div className="DeleteContactModal">
            <h3>You are about to delete the contact, {first} {last}</h3>
            <div className="DeleteContactModal__buttons">
                <Button label="Cancel" click={props.clearModalContent}/>
                <Button purple label="Delete Contact" click={handleDelete}/>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(DeleteContactModal)