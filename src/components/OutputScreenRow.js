// import React from 'react'

// export default function OutputScreen(props) {
//   return (
//     <div>
//         <input type="text" value={props.value} readOnly></input>
//     </div>
//   )
// }

// Import React (Mandatory Step).
import React from 'react';

// Functional Component.
// Used to show Question/Answer.
const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value = {props.value}/>
    </div>
  )
}

// Export Output Screen Row.
export default OutputScreenRow;