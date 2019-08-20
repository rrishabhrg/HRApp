/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Button from '../../Button';
import '../style.less';

class ButtonDelete extends PureComponent {
  render() {
    const { text, type } = this.props;
    return (
      <>
        <Button
          className="btn-delete"
          type={type}
          icon="delete"
        // color="blue" // syntax to change color clr="black"
        >
          {text}
        </Button>
      </>
    );
  }
}

export default ButtonDelete;
