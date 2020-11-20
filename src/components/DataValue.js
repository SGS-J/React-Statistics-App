import React from 'react';
import './DataValue.css';

export default function DataValue({ id, dataFreq, dataValue, onInsert }) {
  return (
    <div className="inputs">
        <input
          className="insert"
          type="number"
          value={dataFreq}
          onChange={e =>
            onInsert({ freq: Number(e.target.value), id: id })
          }
        />
        <input
          className="insert"
          type="number"
          value={dataValue}
          onChange={e =>
            onInsert({ value: Number(e.target.value), id: id })
          }
        />
    </div>
  );
}
