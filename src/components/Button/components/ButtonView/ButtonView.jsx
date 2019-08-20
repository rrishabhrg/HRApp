/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Button from '../../Button';
import '../style.less';

class ButtonView extends PureComponent {
  render() {
    const { text, type } = this.props;
    return (
      <Button
        className="btn-view"
        type={type}
        icon="eye"
      >
        {text}
      </Button>
    );
  }
}

export default ButtonView;
