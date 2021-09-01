import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './styles.scss'


const MainNav = () => {
    return (
        <div className="MainNav">
            <div className="MainNav__title">Contacts</div>
            <div className="MainNav__icon"><FontAwesomeIcon icon="plus"/></div>
        </div>
    )
}

export default MainNav