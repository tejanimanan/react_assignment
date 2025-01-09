import React, { Component } from 'react'

export default class Q7 extends Component {
    state={x:"Not clicked"}
  render() {
    return (
      <>
      <h1>Button clicked or not</h1>
        <button onClick={()=>this.setState({x:"Clicked"})}>
            {this.state.x}
        </button>
      </>
    )
  }
}
