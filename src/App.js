import React, { Component } from 'react';
import { Button} from 'antd';
import './App.less';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Button>按钮</Button>
          <span onClick={()=>{ this.props.history.push("/home");}}>test</span>
          <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
