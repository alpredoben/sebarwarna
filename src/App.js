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
    this.setState({
      size: value,
      graph: this.newGrid(value, this.state.colors),
      count: 0
    });
  }

  fillColor(c) {
    this.state.graph.fillColor(c);
  }
  
}

export default App;
