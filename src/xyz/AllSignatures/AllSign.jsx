/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Layout, Typography } from 'antd';
import AllSignature from './AllSignature';

class AllSign extends React.Component {
  render() {
    const { Title } = Typography;
    return (
      <Layout>
        <Title level={1} style={{ margin: '4px 0px 0px 25px' }}>
          ALL SIGNATURES
        </Title>
        <hr style={{ width: '100%', height: '0%' }} />
        <AllSignature />
      </Layout>
    );
  }
}

export default AllSign;
