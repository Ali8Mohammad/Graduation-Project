import React from 'react';

const Filter = ({ title, children }) => (
  <div className="filter">
    <h3>{title}</h3>
    {children}
  </div>
);

export default Filter;
