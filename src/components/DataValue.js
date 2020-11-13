import React from 'react';

export default function DataValue({ self, onInsert }) {
  return (
    <div className="data-value">
      <input
        type="number"
        value={self.dataFreq}
        onChange={e => onInsert({ freq: Number(e.target.value), id: self._id })}
      />
      <input
        type="number"
        value={self.dataValue}
        onChange={e => onInsert({ value: Number(e.target.value), id: self._id })}
      />
    </div>
  );
}