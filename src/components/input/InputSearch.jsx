import React from 'react'
import './InputSearch.scss'

const InputSearch = ({ onChange }) => {
  return (
    <input type="search" placeholder='what are you looking for ?' onChange={onChange} />
  )
}

export default InputSearch