import React from 'react'
import { connect } from 'react-redux'
import { clearModalContent } from '../../redux/actions'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        clearModalContent: () => dispatch(clearModalContent()),
    }
}

const EditContactModal = props => {
    const { first, last, } = props.contact
    return (
        <div className="EditContactModal">
            <h3 className="EditContactModal__title">Edit contact: {first} {last}</h3>
            <div className="EditContactModal__buttons">
                
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(EditContactModal)