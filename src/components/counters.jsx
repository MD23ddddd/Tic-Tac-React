import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component{
    state={
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
        ]
    }
    onReset=()=>{
        const counters=this.state.counters.map(c=>{  
            c.value=0;
            return c;
        });
        this.setState({counters});     //if state change it will re render all the counters
    }
    handleDelete=(counterId)=>{
        console.log("delete event called",counterId);
        const counters=this.state.counters.filter(c=> c.id!==counterId);
        this.setState({counters});
    }
    handleIncrement=counter=>{
       const counters=[...this.state.counters];    //create a local copy of the counters array
       const Index=counters.indexOf(counter);
       counters[Index].value+=1;
       this.setState(counters);
       console.log(this.state.counters[Index]);
       
    }
    getStatus=()=>{
        const counters=this.state.counters.filter(c=> c.value!==0);
        return counters.length;
    }
    render(){
       return( 
        <h1>
            <button>NAVBAR</button>
             <span >{this.getStatus()}</span>
         {this.state.counters.map(counter => < Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}>
         <h4>Title</h4>
         </Counter>)}
         <button onClick={this.onReset}>reset</button>
        
        </h1>
       );
    }
}

export default Counters;


