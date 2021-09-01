import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SiteFrame from './SiteFrame'
import ContactListPage from '../Pages/ContactListPage'
import CreateContactPage from '../Pages/CreateContactPage'
import './styles.scss'


const MainWindow = () => {
    return (
        <div className="MainWindow">
            <SiteFrame>
                <Switch>
                    <Route exact path="/create-contact" component={CreateContactPage}/>
                    <Route path="/" component={ContactListPage}/>
                </Switch>
            </SiteFrame>
        </div>
    )
}

export default MainWindow