import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import StarterDisplay from './StarterDisplay';

import starters from './starters';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '10px',
  },
};

const conversations = starters;

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ''
    };
    this.getText = this.getText.bind(this);
  }

  getText() {
    let text = conversations[Math.floor(Math.random()*conversations.length)];
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
