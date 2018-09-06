import React from 'react'
import ReactDOM from 'react-dom'
import InvestorList from './investorList.js'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'same-origin',
  headers: { 'X-CSRF-Token': csrfToken }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <InvestorList client={client}/>
  </ApolloProvider>,
  document.getElementById('root')
)
