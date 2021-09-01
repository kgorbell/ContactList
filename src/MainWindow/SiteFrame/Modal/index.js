import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { clearModalContent } from '../../../redux/actions'
import './styles.scss'


const mapStateToProps = (state) => {
    return {
        content: state.modalContent,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearModalContent: () => dispatch(clearModalContent()),
    }
}

const Modal = props => {
    const modal = React.createRef()
    const { clearModalContent, content } = props

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.keyCode === 27) clearModalContent()
        }

        document.addEventListener('keyup', handleEscapeKey, true)

        return () => {
            document.removeEventListener('keyup', handleEscapeKey, true)
        }
    }, [clearModalContent])

    const handleClick = (event) => {
        if (!event.path.includes(modal.current)) clearModalContent()
    }


    return (
        <div className="Modal" ref={modal} onClick={(event) => handleClick(event)}>
            {content &&
                <div className="Modal__content">
                    {content}
                    <div className="Modal__close"><FontAwesomeIcon icon="times"/></div>
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)