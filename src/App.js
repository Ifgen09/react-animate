import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'node-uuid';
import shortId from 'shortid';

class App extends Component {
    constructor () {
        super();
 this.state = {
     list: []
 }
    }
    componentDidMount () {
        console.log('component did mounted', this);
    }

    _handleClick () {
        let list = this.state.list;
        list.push('item ' + this.state.list.length);
        this.setState({
            list: list
        })
    }

    _handleRemoveClick (listItemIndex) {
        let list = this.state.list;
        list.splice(listItemIndex, 1);
        this.setState({
            list: list
        })
    }
  render() {
    return (
      <div className="App">
        <button onClick={ this._handleClick.bind(this) }>Add</button>
          <ul>
              <ReactCSSTransitionGroup  transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                  {this.state.list.map((item, index) => {
                    let id = shortId.generate();
                      console.log(id);
                      return (
                          <li key={ id } onClick={ this._handleRemoveClick.bind(this, index) }>
                              { item }
                          </li>
                      )
                  })}
              </ReactCSSTransitionGroup>
          </ul>
      </div>
    );
  }
}

export default App;
