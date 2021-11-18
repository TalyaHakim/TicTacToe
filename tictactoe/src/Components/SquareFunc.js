import React from 'react';

function SquareFunc(props){
    return (
        <button className="square" onClick={props.onMyClick}>
          {props.myValue}
        </button>
      );
}
export default SquareFunc;  