/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Table } from 'antd';

class CstmTable extends React.Component {
  render() {
    const {
      columns, data, pagination, loading, onChange, onClick,
    } = this.props;
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={onChange}
        onClick={onClick}
      />
    );
  }
}

export default CstmTable;
