import React, { Component } from 'react';
import { Button} from 'antd';
class Test extends Component {
    render() {
        return (
            <div className="App">
                <Button onClick={()=>{this.props.history.push('/home')}}>按钮</Button>
            </div>
        );
    }
}

export default Test;
