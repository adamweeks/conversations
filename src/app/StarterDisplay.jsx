import React, {Component, PropTypes} from 'react';

class StarterDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.displayText}
      </div>
    );
  }
}

StarterDisplay.PropTypes = {
  displayText: PropTypes.string.isRequired
};

export default StarterDisplay;
