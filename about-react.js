// redux: view直接触发dispatch；将action发送到reducer中后，根节点上会更新state，进而改变全局view。

import finalCreateStore from './store/configureStore'  //引入store配置
import reducer from './reducers'  // 引入reducers集合
import 'antd-mobile/dist/antd-mobile.css';//全局引入antd-mobile.css样式

import Container from './router/router';


//创建store
// const store = createStore(reducer);
// 给增强后的store传入reducer
const store = finalCreateStore(reducer)

ReactDOM.render(<div className="app-wrapper"><Provider store={store}><Container /></Provider></div>, document.getElementById('root'));


//这是reducers
const test = (state = tiger, action) => {
  switch (action.type) {
    case '涨工资':
      return state += action.text;
    case '扣工资':
      return state -= 100;
    default:
      return state;
  }
}

{/* <button onClick={PayIncrease}>升职加薪</button>
<button onClick={PayDecrease}>迟到罚款</button> */}
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

/*1. 使用官方脚手架搭建
  npm install -g create-react-app 
  create-react-app my-react

2. 路由*/
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import First from '../pages/first'
import Second from '../pages/second'
import Notfound from '../pages/notfound'
import Third from '../pages/third';
export default class Hello extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />{/*exact表示只有路径完全完全匹配，才渲染*/}
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
            <Route path="/third/:id/:p" component={Third} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
// 在父组件里面设置路由，父组件是公共模块
// render(){
//   return (
//       <Router>
//           <div>
//               <ul>
//                   <li><Link to="/">App</Link></li>
//                   <li><Link to="/shop">Shop</Link></li>
//                   <li><Link to="/owner">Owner</Link></li>
//               </ul>
//               <hr />
//               <Route exact path="/" component={App} />
//               <Route path="/shop" component={Shop} />
//               <Route path="/owner" component={Owner} />
//           </div>
//       </Router>  
//   )
// }        

/*3. 路由传参
 1.<Link to="/first?a=3&b=4&c=5">跳转到第一个页面</Link> this.props.history.push(path)
 2.<Link to="/third/222/7777">跳转到第三个页面 </Link> <Route path="/third/:id/:p" component={Third} />
   取： this.props.match.params.id
 3.var path = {
    pathname: '/second',
    query: {
      name: 'xu',
      age: 24
    }
  }
  this.props.history.push(path); // 页面刷新会报错  */
// 4. 初始化
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '许立恒',
      age: 24
    }
  }
}
/*es6 创建组建中删除了这个函数 要想使用 可用
var App = React.createClass({
  getDefaultProps(){
    return {
      name : '许立恒',
      age : 24,
      num : 0
    }
  }
})*/
// 5. this的绑定
// onClick={this.setNum.bind(this)}  

// this.setState是个异步函数，可能有时候赋值不上，解决方法
this.setState({
  speed: 40
}, () => {
  this.roll()
  this.setState({
    click: true
  })
})

// 跳转的时候子组件中获取不到history...
// 解决方法:
// 1. 从父组件传过去
// render() {
//   return (
//     <div className="homePage">
//       <MyAppModal  history = {this.props.history}  />
//     </div>)
//   }
// 子组件接受
// async openProject(index){
//    return await  this.props.history.push('/myproject/'+index);
// }
// 2. npm i prop-types --save-dev
// import PropTypes from 'prop-types';
// constructor(props) {
//     super(props);
//   }
  // 这一步是重点
  // static contextTypes = {
  //   router: PropTypes.object.isRequired
  // };
  // this.context.router.history.push("/otherPath");