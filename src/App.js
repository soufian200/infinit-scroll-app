import React, { Component } from 'react';
import './App.css';
import Images from './components/Images'
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    background-color: red;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Container> */}
        <Images />

        {/* </Container> */}
      </div>
    );
  }
}

export default App;
