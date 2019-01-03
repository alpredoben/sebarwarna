import React, { Component } from 'react';
import { Graphs } from './graphs';
import Grid from './components/grid/grid';
import ColorPicker from './components/pallate/colorpicker';
import './App.css';


const SIZE = 12;
const LISTCOLOR = [
  'blue',
  'red',
  'green',
  'yellow',
  'orange'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: SIZE,
      graph: new Graphs(SIZE),
      colors: LISTCOLOR,
      count: 0
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });    
  }

  restart() {
    this.setState({
      graph: new Graphs(this.state.size),
      count: 0
    })
  }


  inputSlider(value) {
    
  }
}

export default App;
