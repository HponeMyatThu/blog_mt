import React from 'react';

const ButtonComponent = props => {
  return (
    <button className={props.className} type={props.type}>
      {props.btnIcon} {props.btnLabel}
    </button>
  );
};

export default ButtonComponent;
