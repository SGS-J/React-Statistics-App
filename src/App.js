import React from 'react';
import DataInsert from './components/DataInsert';
import ResultTable from './components/ResultTable';
import createId from './helpers/idCreator';
import './App.css';

const defaultData = {
  _id: '00001A',
  dataFreq: 1,
  dataValue: 1,
};

export default class App extends React.Component {
  state = {
    data: [defaultData],
    output: 0,
    count: 1,
  };

  handleClickAdd = () => {
    const actualData = this.state.data.slice();
    const len = actualData.length;
    const addValue = len < 1 ? 0 : actualData[len - 1].dataValue;
    const newData = actualData.concat({
      _id: createId(this.state.count),
      dataFreq: 1,
      dataValue: addValue + 1,
    });
    const count = this.state.count + 1;
    this.setState({ data: newData, count: count });
  };

  handleClickRemove = () => {
    const newData = this.state.data.slice(0, -1);
    const count = this.state.count < 1 ? 0 : this.state.count - 1;
    this.setState({ data: newData, count: count });
  };

  handleInsert = target => {
    const index = this.state.data.findIndex(val => val._id === target.id);
    if ('freq' in target) {
      const newDataFreq = this.state.data.slice();
      newDataFreq[index].dataFreq = target.freq;
      this.setState({ data: newDataFreq });
    } else {
      const newDataValue = this.state.data.slice();
      newDataValue[index].dataValue = target.value;
      this.setState({ data: newDataValue });
    }
  };

  handleSubmit = () => {
    let num = this.state.output;
    if (num === 1) {
      num = 0;
      this.setState({ data: [defaultData], output: num, count: 1 });
    } else {
      num = 1;
      this.setState({ output: num });
    }
  };

  render() {
    const state = this.state.output;
    const arrayEmpty = this.state.data.length < 1;
    const mainElement =
      state === 0 ? (
        <DataInsert
          data={this.state.data}
          onClickAdd={this.handleClickAdd}
          onClickRemove={this.handleClickRemove}
          onInsert={this.handleInsert}
        />
      ) : (
        <ResultTable data={this.state.data} />
      );
    return (
      <main id="main" className={state === 0 ? 'insert' : 'result'}>
        {mainElement}
        <input
          onClick={this.handleSubmit}
          disabled={arrayEmpty}
          type="button"
          value={state === 0 ? 'Calculate' : 'Again'}
        />
      </main>
    );
  }
}
