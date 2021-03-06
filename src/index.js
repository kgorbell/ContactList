import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { faTimes, faPlus, faAddressBook, faChevronDown, faChevronUp, faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTimes)
library.add(faPlus)
library.add(faAddressBook)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faEdit)
library.add(faCheckCircle)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
