import React from 'react';
import Board from './Board'

class Square extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        value:null,
    }
  }
    render() {
        return (
          <button className="square" onClick={() => this.props.onMyClick()}>
            {this.props.value}
          </button>
        );
      }
}
export default Square;  