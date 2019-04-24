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

const addTodoWithDispatch = (text) => {
  return {
    type: '涨工资',
    text
  }
}
//需要渲染什么数据
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    tiger: state
  }
}
//需要触发什么行为
const mapDispatchToProps = (dispatch) => {
  return {
    PayIncrease: () => dispatch(addTodoWithDispatch(10000)),
    PayDecrease: () => dispatch({ type: '扣工资' })
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
