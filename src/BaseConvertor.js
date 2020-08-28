import React from 'react';
import InputTable from './InputTable';

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(number) {
    this.setState({ number });
  }

  render() {
    const [, , ...bases] = [...Array(17).keys()];
    const inputsTable = bases.map(base => (
      <InputTable
        key={base}
        base={base}
        onChange={this.handleClick}
        number={this.state.number}
      />
    ));
    return <div>{inputsTable}</div>;
  }
}

export default BaseConvertor;
