import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SelectComponent = ({ options }) => {
  const animatedComponents = makeAnimated();
  return (
    <Select
      className='w-75'
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
    />
  );
};

export default SelectComponent;
