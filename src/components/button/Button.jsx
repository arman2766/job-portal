import React from 'react'
import './Button.scss'

const Button = ({ text, onClick, btnType='primary'}) => {
    return (
        <button className={`btn ${btnType==='primary' ? 'btn-primary' : 'btn-secondary'}`} onClick={onClick}>{text}</button>
    )
}

export default Button