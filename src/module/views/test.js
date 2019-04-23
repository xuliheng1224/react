import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    const { PayIncrease, PayDecrease, tiger } = this.props;
    return (
      <div >
        <h2>当月工资为{tiger}</h2>
        <button onClick={PayIncrease}>升职加薪</button>
        <button onClick={PayDecrease}>迟到罚款</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state, ownProps) {
  console.log(ownProps);

  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' })
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
