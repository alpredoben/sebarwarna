import React from 'react';
import Cell from '../boxcell/mycell';
import './grid.css';

const Grid = ({grid, colors}) => {
  let rows = Object.keys(grid.nodes).map((v) => {
    return <Cell key={v} color={colors[grid.nodes[v].color]} size={grid.size} />
  });

  return (
    <div className="grid">
      {rows}
    </div>
  );
}

export default Grid;
