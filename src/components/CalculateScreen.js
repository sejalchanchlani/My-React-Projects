import React from 'react'
import OutputScreen from './OutputScreenRow'

export default function CalculateScreen(props) {
  return (
    <div>
        <OutputScreen value={props.question} />
        <OutputScreen value={props.answer}/>
    </div>
  )
}
