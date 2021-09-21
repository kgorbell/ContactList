import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './styles.scss'


const MainNav = () => {
    const [redirectTo, setRedirect] = useState(null)

    return (
        <React.Fragment>

            {!!redirectTo && <Redirect to={redirectTo} />}

            <div className="MainNav">
                <div className="MainNav__icon" onClick={() => setRedirect("/")}><FontAwesomeIcon icon="address-book"/></div>
                <div className="MainNav__title">Contact List</div>
                    <div className="MainNav__icon" onClick={() => setRedirect("/create-contact")}><FontAwesomeIcon icon="plus"/></div>
            </div>
        </React.Fragment>
    )
}

export default MainNav