import React from 'react';
import DataInsert from './components/DataInsert';
import Table from './components/Table';
import './App.css';

export default class App extends React.Component {
  state = {
    history: [],
    freqTable: [],
    output: 0,
  };

  handleSubmit = () => {
    const num = this.state.output === 1 ? 0 : 1;
    this.setState({ output: num });
  };

  render() {
    const state = this.state.output;
    const mainElement =
      state === 0 ? <DataInsert /> : <Table data={this.state.freqTable} />;
    return (
      <main id="main" className={state === 0 ? 'insert' : 'result'}>
        {mainElement}
        <input onClick={this.handleSubmit} type="button" value="Calculate" />
      </main>
    );
  }
}
