/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Layout, Typography } from 'antd';
import Entity from './Entity';

class EntityLayout extends React.Component {
  render() {
    const { Title } = Typography;
    return (
      <Layout>
        <Title level={1} style={{ margin: '4px 0px 0px 25px' }}>
          ENTITY DATA MANAGEMENT
        </Title>
        <hr style={{ width: '100%' }} />
        <Entity />
      </Layout>
    );
  }
}

export default EntityLayout;
