import React, { Component } from 'react';

interface AppProps { }
interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}