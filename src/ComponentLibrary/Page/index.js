import React from 'react'
import './styles.scss'


const Page = (props) => {
    const { children, title, isForm } = props
    let className="Page"
    if (isForm) className += " Page--isForm"

    return (
        <div className={className}>
            <div className="Page__bounds">
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
    )
}

export default Page