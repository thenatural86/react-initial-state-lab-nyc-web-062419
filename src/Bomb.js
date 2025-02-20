// your Bomb code here!
import React, { PureComponent } from "react"

export default class Bomb extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const message =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`

    return <div>{message}</div>
  }
}
