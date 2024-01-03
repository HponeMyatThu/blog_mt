import React from 'react'

const InputBox = (props) => {
  return (
    <div>
        <input className={props.className} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default InputBox