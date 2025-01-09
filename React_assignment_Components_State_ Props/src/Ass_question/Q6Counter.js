import React, { Component } from 'react'

export default class Q6Counter extends Component {
    state={num:1}
  render() {
    return (
      <>
            <h2>Counter Button</h2>
            <button onClick={()=>this.setState({num:this.state.num+1})}>Counter{this.state.num}</button>
       </>
    )
  }
}
