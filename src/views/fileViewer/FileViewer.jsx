// react component used to display the file contents

import React from "react";
import "./FileViewer.css";

const FileViewer = ({ material }) => {
  // inputs need to have a click handler that updates the material state

  return (
    <div className='file-viewer'>
      <h2>{material.name}</h2>
      <hr />
      <div className='file-viewer__content'>
        <div className='file-viewer__line'>
          <h4 className='file-viewer__symbol'>Symbol | X Coord | Y Coord | Z Coord </h4>
        </div>
        {material.coord.map((line, i) => (
          <div key={i} className='file-viewer__line'>
            <h5 className='file-viewer__symbol'>{line[0]}</h5>
            <input type='number' className='file-viewer__x_coord' value={line[1]} />
            <input type='number' className='file-viewer__y_coord' value={line[2]} />
            <input type='number' className='file-viewer__z_coord' value={line[3]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileViewer;
