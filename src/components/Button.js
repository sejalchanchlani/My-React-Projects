import React from 'react'

export default function CalculateButton(props) {
  return (
    <div>
        {/* <button onClick={props.handleClick}>{props.label}</button> */}
        <input
      type="button"
      value={props.label}
      onClick = {props.handleClick}
    />
    </div>
  )
}

