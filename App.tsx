import React, { Component, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

const App = () => {
  const headerStyle = {
    textAlign: 'center'
  }

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h2 style={headerStyle}>
          Search Star War Characters
        </h2>
      </div>
    </ApolloProvider>
  )
}

export default App;