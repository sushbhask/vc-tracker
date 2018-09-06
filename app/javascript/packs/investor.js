import React, { Component } from 'react'

class Investor extends Component {
  render() {
    return (
      <div>
        <div>
          <h5> {this.props.name} </h5>
        </div>
        <div>
          <label for={this.props.key}> <h7> Meeting status: </h7> </label>
          <div class="col-md-3" id={this.props.key}>
            <select class="form-control" value={this.props.meeting_status}>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="in-person">In-Person</option>
              <option value="closed">Closed</option>
            </select>
          <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Investor
