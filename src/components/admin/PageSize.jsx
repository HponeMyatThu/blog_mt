import React, { useState } from 'react';

const PageSize = ({style, handleClick, pageSize}) => {
  return (
    <div className={style}>
      <label htmlFor="pageSize">Page Size:</label>
      <select id="pageSize" value={pageSize} onChange={handleClick}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default PageSize;
