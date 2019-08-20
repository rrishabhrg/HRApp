/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Button from '../../Button';
import '../style.less';

class ButtonEdit extends PureComponent {
  render() {
    const { text, type } = this.props;
    return (
      <>
        <Button
          className="btn-edit"
          type={type}
          icon="edit"
        >
          {text}
        </Button>
      </>
    );
  }
}

export default ButtonEdit;
