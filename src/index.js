import React from 'react'
import styles from './styles.module.css'



export const Button = ({ text }) => {
  return <button>{text}</button>
}

export const Paragraph = (props) =>{
  return <p {...props}>{props.text}</p>
}
