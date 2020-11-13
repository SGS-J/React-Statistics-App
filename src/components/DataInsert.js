import React from 'react';
import './DataInsert.css';

function DataValue({ freq, val, id, onInsert }) {
  return (
    <div className="data-value">
      <input
        type="number"
        value={freq}
        onChange={e => onInsert({ freq: Number(e.target.value) }, id)}
      />
      <input
        type="number"
        value={val}
        onChange={e => onInsert({ value: Number(e.target.value) }, id)}
      />
    </div>
  );
}

export default class DataInsert extends React.Component {
  state = {
    _id: ['10000A'],
    dataFreq: [1],
    dataValue: [1],
  };

  get createId() {
    const len = this.state._id.length + 1;
    const newValue = `${len * 10000}${String.fromCharCode(len % 64 + 64)}`; 
    return newValue;
  }

  get mergeData() {
    return this.state.dataFreq.map((freq, i) => [
      freq,
      this.state.dataValue[i],
    ]);
  }

  handleClickAdd = () => {
    const actualData = this.mergeData;
    const len = actualData.length;
    const addValue = len < 1 ? 0 : actualData[len - 1][1];
    const newData = actualData.concat([[1, addValue + 1]]);
    const newFreq = newData.map(val => val[0]);
    const newValue = newData.map(val => val[1]);
    const newId = this.state._id.concat(this.createId);
    this.setState({ _id: newId, dataFreq: newFreq, dataValue: newValue });
  };

  handleInsert = (target, id) => {
    const index = this.state._id.findIndex(val => val === id);
    if ('freq' in target) {
      const newDataFreq = this.state.dataFreq.slice();
      newDataFreq[index] = target.freq;
      this.setState({ dataFreq: newDataFreq });
    } else {
      const newDataValue = this.state.dataValue.slice();
      newDataValue[index] = target.value;
      this.setState({ dataValue: newDataValue });
    }
  };

  render() {
    const dataFreq = this.state.dataFreq;
    const dataValue = this.state.dataValue;
    const ids = this.state._id;
    const data = ids.map((id, i) => [id, dataFreq[i], dataValue[i]]);
    const elements = data.map(val => {
      return (
        <DataValue
          key={val[0]}
          id={val[0]}
          freq={val[1]}
          val={val[2]}
          onInsert={this.handleInsert}
        />
      );
    });

    return (
      <React.Fragment>
        <section>
          <span className="title-freq">Frequency</span>
          <span className="title-value">Value</span>
          <div className="table-data">{elements}</div>
        </section>
        <button onClick={this.handleClickAdd}>+</button>
      </React.Fragment>
    );
  }
}
