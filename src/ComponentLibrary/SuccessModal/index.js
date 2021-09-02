import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearModalContent } from '../../redux/actions'
import Button from '../Button'
import './styles.scss'


const mapDispatchToProps = dispatch => {
    return {
        clearModalContent: () => dispatch(clearModalContent()),
    }
}

const SuccessModal = props => {
    const { title, body, clearModalContent } = props
    return (
        <div className="SuccessModal">
            <div className="SuccessModal__icon"><FontAwesomeIcon icon="check-circle"/></div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="SuccessModal__buttons">
                <Button label="OK" click={clearModalContent}/>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SuccessModal)