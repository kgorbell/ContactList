import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'
import './styles.scss'


const SiteFrame = (props) => {
    return (
        <div className="SiteFrame">
            <MainNav/>
            <div className="SiteFrame__content">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default SiteFrame