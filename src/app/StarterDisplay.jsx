import React, {Component, PropTypes} from 'react';

class StarterDisplay extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.displayText}</h3>
      </div>
    );
  }
}

StarterDisplay.PropTypes = {
  displayText: PropTypes.string.isRequired
};

export default StarterDisplay;
