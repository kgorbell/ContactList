import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'
import './styles.scss'


const SiteFrame = (props) => {
    return (
        <div className="SiteFrame">
            <MainNav/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default SiteFrame