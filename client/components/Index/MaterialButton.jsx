import React, {PropTypes} from 'react';

export default class MaterialComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.title}</span> <br/>
        <button className="waves-effect waves-light btn"
                onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}
