/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button } from 'antd';
import './style.less';

class BasicBtn extends React.Component {
  render() {
    const {
      type,
      icon,
      children,
      className,
    } = this.props;
    return (
      <Button type={type} icon={icon} className={className || 'basic-btn'}>
        {children}
      </Button>
    );
  }
}

export default BasicBtn;
