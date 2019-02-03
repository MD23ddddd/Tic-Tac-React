import React, { Component } from 'react';


class Counter extends React.Component{
    render(){
        console.log("props",this.props)
        return (
        <div>
            <span style={ {fontSize:30 } }  className="badge badge-primary m-2" >{this.formatCount()}</span>
            <button onClick={() =>  this.props.onIncrement(this.props.counter) } >Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }
    formatCount(){
        return this.props.counter.value === 0 ? <h1>0</h1>:this.props.counter.value;
    }
}

export default Counter;