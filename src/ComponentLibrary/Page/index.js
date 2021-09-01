import React from 'react'
import './styles.scss'


const Page = (props) => {
    const { children, title } = props
    return (
        <div className="Page">
            <div className="Page__bounds">
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
    )
}

export default Page