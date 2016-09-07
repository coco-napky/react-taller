import React, {PropTypes} from 'react';

export default class MaterializeButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <button {...this.props} className="waves-effect waves-light btn">
          {this.props.children}
        </button>
    );
  }
}
1
