import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './styles.scss'


const MainNav = () => {
    return (
        <div className="MainNav">
            <a href="/">
                <div className="MainNav__icon"><FontAwesomeIcon icon="address-book"/></div>
            </a>
            <div className="MainNav__title">Contact List</div>
            <a href="/create-contact">
                <div className="MainNav__icon"><FontAwesomeIcon icon="plus"/></div>
            </a>
        </div>
    )
}

export default MainNav