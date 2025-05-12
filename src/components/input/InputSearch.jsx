import React from 'react'
import './InputSearch.scss'

const InputSearch = ({ onChange, placeholder }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={onChange} />
  )
}

export default InputSearch