import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import finalCreateStore from './store/configureStore'  //引入store配置
import reducer from './reducers'  // 引入reducers集合

import Container from './router/router';


//创建store
// const store = createStore(reducer);
// 给增强后的store传入reducer
const store = finalCreateStore(reducer)

ReactDOM.render(<div className="app-wrapper">
  <Provider store={store}>
    <Container />
  </Provider>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
