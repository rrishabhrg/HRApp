/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Button from '../../Button';
import '../style.less';

class ButtonCreate extends PureComponent {
  render() {
    const { text, type } = this.props;
    return (
      <>
        <Button
          className="btn-create"
          type={type}
          icon="plus"
          // color="blue" // syntax to change color clr="black"
        >
          {text}
        </Button>
      </>
    );
  }
}

export default ButtonCreate;
