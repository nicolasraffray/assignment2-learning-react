import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
      <p>
        The length of the pararagraph is: {props.tLength} Characters
      </p>
    </div>
  )
}

export default ValidationComponent;