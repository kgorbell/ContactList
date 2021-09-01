import React from 'react'
import { connect } from 'react-redux'
import MainNav from './MainNav'
import Footer from './Footer'
import Modal from './Modal'
import './styles.scss'


const mapStateToProps = state => {
    return {
        modalContent: state.modalContent,
    }
}

const SiteFrame = (props) => {
    const { modalContent } = props
    return (
        <div className="SiteFrame">
            {modalContent && <Modal />}
            <MainNav/>
            <div className="SiteFrame__content">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default connect(mapStateToProps)(SiteFrame)