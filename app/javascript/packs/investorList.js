import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Investor from './investor.js'

class InvestorList extends Component {
  componentDidMount() {
    this.props.client.query({
      query: gql`
        {
          allInvestors {
            name
            meeting_status
          }
        }
      `
    }).then(response => this.setState({investors: response}))
  }
  render() {
    let investors = this.state && this.state.investors.data.allInvestors;
    if(investors === null){
      return <div></div>
    }
    return (
      investors.map((investor, index) => (
        <Investor key={index} name={investor.name} meeting_status={investor.meeting_status} />
      ))
    )
  }
}

export default InvestorList
