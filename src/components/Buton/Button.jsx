import React from 'react'
import './Button.css'

const Button = ( {title} ) => {
  return (
    <button>
      <span>{ title }</span>
    </button>
  )
}

export default Button
