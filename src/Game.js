import Tract from 'react'; 
import './Games.css'; 

export class Square extends React.Component {
  render() {
    return (
      <button className="square" id={this.props.index} onClick={() => this.props.onClick()}>
        { this.props.value }
      </button>
    ); 
  }
}

export class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} index={i}/>; 
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          </div>
        </div>
    ); 
  }
}

class Game extends React.Component {
  constructor(props) {}
}