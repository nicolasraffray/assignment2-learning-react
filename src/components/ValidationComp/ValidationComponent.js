import React from 'react';

const ValidationComponent = (props) => {
  let returnString = <p>Text too Short</p>;

  if(props.tLength > 5){
    returnString = <p>Text is Long Enough</p>
  }
  return (
    <div>
      <p>
        The length of the pararagraph is: {props.tLength} Characters
      </p>
      {returnString}
    </div>
  )
}

export default ValidationComponent;