import React, { Component } from "react";

export default class SelectListBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 0
    }
  }
  onChangeGroup(event) {
    event.stopPropagation();
    let flagNow = this.state.flag;
    if (flagNow == 117) {
      this.setState({
        flag: 0
      });
    }
    else {
      this.setState({
        flag: flagNow + 9
      });
    }
  }
  onSelectItem(index, item) {
    var likedList = this.props.likedList;
    var likedListKey = Object.keys(likedList);
    if (likedListKey.indexOf(index.toString()) >= 0) {
      return;
    }
    this.props.onAddLikeItem(index, item);
  }
  render() {
    let selectListArray = [];
    for (var i in this.props.selectList) {
      selectListArray.push(this.props.selectList[i])
    }
    let likedList = this.props.likedList;
    let likedListKey = Object.keys(likedList);
    return (
      <div>
        <h2 className="clr">
          <span onClick={event => { this.onChangeGroup(event) }}>换一换</span>
          选择分类</h2>
        <ul className="feed-list clr">
          {
            selectListArray.slice(this.state.flag, this.state.flag + 9).map((item, index) => {
              return (
                <li onClick={event => { this.onSelectItem((index + this.state.flag), item) }}
                  key={index + this.state.flag}>
                  {(likedListKey.indexOf((index + this.state.flag).toString()) >= 0 ?
                    <span className='disable'>{item}</span>
                    :
                    <span>{item}</span>
                  )}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}