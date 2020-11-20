export default class Statistic {
  constructor(freqTable) {
    this.freqTable = this.initTable(freqTable);
    this.maximum = this.freqTable[this.freqTable.length - 1].value;
    this.minimum = this.freqTable[0].value;
    this.range = this.maximum - this.minimum;
    this.amount = this.freqTable[this.freqTable.length - 1].accFreq;
  }

  initTable(table) {
    table.sort((a, b) => {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
      return 0;
    });

    return table.reduce((acc, cur, index) => {
      const accFreq = acc.length < 1 ? 0 : acc[index - 1].accFreq;
      cur.accFreq = accFreq + cur.freq;
      return acc.concat(cur);
    }, []);
  }

  get measurements() {
    return [
      {
        name: 'Mode',
        value:this.mode(),
      },
      {
        name: 'Median',
        value: this.median(),
      },
      {
        name: 'Mean',
        value: this.mean(),
      },
      {
        name: 'Maximum',
        value: this.maximum,
      },
      {
        name: 'Minimum',
        value: this.minimum,
      },
      {
        name: 'Range',
        value: this.range,
      },
      {
        name: 'Mean Deviation',
        value: this.meanDeviation(),
      },
      {
        name: 'Variance',
        value: this.variance(),
      },
      {
        name: 'Standard deviation',
        value: this.standardDeviation(),
      },
      {
        name: 'Coefficient of variation',
        value: this.coefficientOfVar(),
      }
    ];
  }

  mode() {
    const values = this.freqTable.map(el => el.freq);
    const index = values.indexOf(Math.max(...values));
    return this.freqTable[index].value;
  }

  mean() {
    const table = this.freqTable;
    const countValues = table
      .map(el => el.freq * el.value)
      .reduce((acc, cur) => acc + cur);
    const result = countValues / this.amount;
    return Number.isInteger(result) ? result : result.toFixed(2);
  }

  median() {
    const table = this.freqTable;
    const len = this.amount;
    let result = 0;
    if (len % 2 === 0) {
      const pos = [len / 2, len / 2 + 1];
      const firIndex = table.findIndex(el => el.accFreq >= pos[0]);
      const secIndex = table.findIndex(el => el.accFreq >= pos[1]);
      const first = table[firIndex].value;
      const second = table[secIndex].value;
      result = (first + second) / 2;
      result = Number.isInteger(result) ? result : result.toFixed(2);
    } else {
      const pos = (len + 1) / 2;
      const index = table.findIndex(el => el.accFreq >= pos);
      result = table[index].value;
    }

    return result;
  }

  meanDeviation() {
    const mean = this.mean();
    const values = this.freqTable.map(
      el => Math.abs(mean - el.value) * el.freq
    );
    const sum = values.reduce((acc, cur) => acc + cur);
    const result = sum / this.amount;
    return Number.isInteger(result) ? result : result.toFixed(2);
  }

  variance() {
    const mean = this.mean();
    const values = this.freqTable.map(
      el => Math.pow(mean - el.value, 2) * el.freq
    );
    const sum = values.reduce((acc, cur) => acc + cur);
    const result = sum / this.amount;
    return Number.isInteger(result) ? result : result.toFixed(2);
  }

  standardDeviation() {
    const result = Math.sqrt(this.variance());
    return Number.isInteger(result) ? result : result.toFixed(2);
  }

  coefficientOfVar() {
    const result = this.standardDeviation() / this.amount;
    return Number.isInteger(result) ? result : result.toFixed(2);
  }
}
