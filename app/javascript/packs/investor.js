import React, { Component } from 'react'

class Investor extends Component {
  render() {
    return (
      <div>
        <div>
          Name: {this.props.investor.name}
        </div>
        <div>
          Meeting status: {this.props.investor.meeting_status}
        </div>
      </div>
    )
  }
}

export default Investor
