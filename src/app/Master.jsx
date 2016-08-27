import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  container: {
    textAlign: 'center'
  },
};

class Master extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Material-UI</h1>
        <h2>example project</h2>
        <RaisedButton
          label="Super Secret Password"
          secondary={true}
        />
      </div>
    );
  }
}

export default Master;