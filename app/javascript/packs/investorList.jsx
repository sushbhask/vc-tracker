import { request } from 'graphql-request'
import React, { Component } from 'react'

class InvestorList extends Component {
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

const query = `query {
  allInvestors {
    id
  }
}`

request('https://localhost:3000/graphql', query).then(data => console.log(data))
