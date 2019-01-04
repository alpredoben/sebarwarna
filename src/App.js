import React, { Component } from 'react';
import Graphs from './graphs/index';
import Grid from './components/grid/grid';
import ColorPicker from './components/pallate/colorpicker';
import './App.css';


const SIZE = 12;
const LIST_COLOR = [
  'blue',
  'red',
  'green',
  'yellow',
  'orange',
  'black',
  'cyan'
];

export default class App extends Component 
{
  constructor(props)
  {
    super(props);
    
    this.incrementCount = this.incrementCount.bind(this);
    this.inputSlider = this.inputSlider.bind(this);
    this.restart = this.restart.bind(this);
    this.fillColor = this.fillColor.bind(this);

    this.state = {
      size: SIZE,
      graph: new Graphs(SIZE),
      colors: LIST_COLOR,
      count: 0
    }
  }


  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  restart() {
    console.log(this.state);

    this.setState({
      graph: new Graphs(this.state.size),
      count: 0
    });
  }

  inputSlider(val) {
    this.setState({
      size: val,
      graph: this.newGrid(val, this.state.colors),
      count: 0
    });
  }

  fillColor(c) {
    this.state.graph.fillColor(c);
  }

  render() {
    return(
      <div className="content">
        <div className="header">
          <h2>Penyebaran Warna</h2>
          <div className="restart-game" 
            onClick={ (e) => { this.restart()} }>
            Mulai Baru
          </div>
          <div className="count">
            Tergantikan <span>{this.state.count}</span>
          </div>
        </div>

        <div>
          <ColorPicker colors={this.state.colors} clickHandle={this.fillColor} incrementCount={this.incrementCount} />
        </div>
        <Grid grid={this.state.graph} colors={this.state.colors} size={this.state.size}/>
      </div>
    );
  }

}
