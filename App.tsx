import React, { Component, useState } from 'react';

const App = () => {
  const [name] = useState('React');
  return (
    <div>
      <p>
        Start editing to see some magic happen :)
      </p>
      <p>
        Name: { name }
      </p>
    </div>
  )
}

export default App;