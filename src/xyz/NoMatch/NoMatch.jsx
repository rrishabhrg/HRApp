/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Typography } from 'antd';

class NoMatch extends React.Component {
  render() {
    const { Title } = Typography;
    return (
      <React.Fragment>
        <Title style={{ textAlign: 'center' }}>404</Title>
        <Title level={4} style={{ textAlign: 'center' }}>
          PAGE NOT FOUND
        </Title>
      </React.Fragment>
    );
  }
}

export default NoMatch;
