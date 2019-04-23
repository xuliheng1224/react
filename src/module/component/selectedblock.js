import React, { Component } from "react";

export default class SelectedBlock extends Component {
  constructor(props) {
    super(props);
  }
  deleteItem(event, index) {
    this.props.onDeleteLikeItem(index);
  }
  render() {
    let likedList = this.props.likedList;
    let likedListArray = [];
    let likedListKey = Object.keys(likedList);
    likedListKey.forEach(function (index) {
      likedListArray.push(likedList[index]);
    })
    return (
      <div>
        <h2>已选分类(<em id="f-num">{likedListArray.length}</em>)</h2>
        <div className="selected-list" style={{ overflow: 'auto' }}>
          <ul className="feed-list">
            {
              likedListArray.length > 0 ?
                likedListArray.map((item, index) => {
                  return (
                    <li style={{ position: 'relative' }}>
                      <span>{item}</span>
                      <a>
                        onClick={event => { this.deleteItem(event, likedListKey[index]) }}>
                      </a>
                    </li>
                  )
                })
                :
                <li className="empty-list">还没有任何订阅<br />请从下方选择订阅</li>
            }
          </ul>
        </div>
      </div>
    )
  }
}