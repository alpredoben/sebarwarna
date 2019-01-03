import React from 'react';
import Cell from '../boxcell/cell';
import './grid.css';

export const Grid = ({grid, colors}) => {
  let rows = Object.keys(grid.nodes).map((v) => {
    return <Cell key={v} color={colors[grid.nodes[v].color]} size={grid.size} />
  });

  return (
    <div className="grid">
      {rows}
    </div>
  );
}
