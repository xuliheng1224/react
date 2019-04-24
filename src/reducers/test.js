const count = 10000;

const test = (state = count, action) => {
  switch (action.type) {
    case '涨工资':
      return state += action.text;
    case '扣工资':
      return state -= 1000;
    default:
      return state;
  }
}

export default test;