import { createLogger } from 'redux-logger' // redux-logger支持 createLogger
import { createStore, applyMiddleware, compose } from 'redux' // 引入redux createStore、中间件及compose
// 创建一个中间件集合
const logger = createLogger();

// 利用compose增强store，这个 store 与 applyMiddleware
const finalCreateStore = compose(
  applyMiddleware(logger),
)(createStore)
export default finalCreateStore;