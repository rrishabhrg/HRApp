/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Layout, Typography } from 'antd';
import AllTag from './AllTag';

class AllTagLayout extends React.Component {
  render() {
    const { Title } = Typography;
    return (
      <Layout>
        <Title level={1} style={{ margin: '4px 0px 0px 25px' }}>
          ALL TAGS
        </Title>
        <hr style={{ width: '100%' }} />
        <AllTag />
      </Layout>
    );
  }
}

export default AllTagLayout;
