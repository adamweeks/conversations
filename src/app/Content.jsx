import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import StarterDisplay from './StarterDisplay';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '10px',
  },
};

const greetings = ['hey','hello','sup','hi'];

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ''
    };
    this.getText = this.getText.bind(this);
  }

  getText() {
    let text = greetings[Math.floor(Math.random()*greetings.length)];
    this.setState({displayText: text});
  }

  render() {
    return (
      <div style={styles.container}>
        <RaisedButton
          label="Give Me a Conversation"
          secondary={true}
          onClick={this.getText}
        />
        <StarterDisplay displayText={this.state.displayText} />
      </div>
    );
  }
}

export default Master;
