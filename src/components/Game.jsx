import React, { Component } from 'react';
class Square extends Component{
state={
    
    id:null,
}


  render(){
    this.state.id=this.props.index;
    return(
    
      <button style={ {height:30}} className="square" onClick={ ()=> this.props.newState(this.state.id) }>{this.props.value}</button>
  
    );
  }
}

class Board extends Component{

  state={
    values:[null,null,null,null,null,null,null,null,null],
    player:'X',
  }

  calculateWinner(){
    const list=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<list.length;i++){
      const [a,b,c]=list[i];
      if(this.state.values[a] && this.state.values[a]===this.state.values[b] && this.state.values[a]===this.state.values[c]){
        return this.state.values[a];
      }
    }
    return null;
  }
  updateState=(squareId)=>{
     const values=[...this.state.values];
     const player=(this.state.player)==='X'?'O':'X';
     values[squareId]=this.state.player;
   
     this.setState({values:values,player:player});
     console.log(squareId,values);
     
  }
  renderSquare(j,i){
    return <Square index={j} value={i} newState={this.updateState}/>;
  }
  render(){
    const v = this.calculateWinner();
    console.log(v);
    return (
    <div>
    <div className="board-row">
       {this.renderSquare(0,this.state.values[0])}
       {this.renderSquare(1,this.state.values[1])}
       {this.renderSquare(2,this.state.values[2])}
       <br></br>
    </div>
     <div className='board-row'>
       {this.renderSquare(3,this.state.values[3])}
       {this.renderSquare(4,this.state.values[4])}
       {this.renderSquare(5,this.state.values[5])}
    </div>
     <div className='board-row'>
       {this.renderSquare(6,this.state.values[6])}
       {this.renderSquare(7,this.state.values[7])}
       {this.renderSquare(8,this.state.values[8])}
    </div>
    </div>
    );}
}
class Game extends Component{
    render(){
        return(
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            </div>
        );
    }
}
export default Game;