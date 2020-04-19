/* eslint-disable react/prop-types */
import React from 'react';

const Spinner = ({ style }) => (
  <div className="spinner" style={style}>
    <img
      src="https://loading.io/spinners/comets/index.comet-spinner.svg"
      alt="Spinner"
    />
  </div>
);

export default Spinner;
