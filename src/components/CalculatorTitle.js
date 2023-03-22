// import React from "react";

// export default function CalculatorTitle(props) {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//     </div>
//   );
// }


// Import React (Mandatory Step).
import React from 'react';

// Create Functional Component.
// Takes title as props.value.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value }
    </div>
  )
}

// Export Calculator Title.
export default CalculatorTitle;