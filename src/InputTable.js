import React from 'react';

const InputTable = ({ number, base, onChange }) => {
  number = isNaN(number) ? '' : number;
  return (
    <div>
      <label>
        Base {base}
        <input
          value={number.toString(base)}
          onChange={e => {
            onChange(parseInt(e.target.value, base));
          }}
        />
      </label>
    </div>
  );
};

export default InputTable;
