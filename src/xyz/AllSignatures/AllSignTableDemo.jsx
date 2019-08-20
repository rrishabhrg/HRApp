/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Table, Icon, Button } from 'antd';

const renderContent = (value) => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

const columns = [
  // {
  //   colSpan: 0,
  //   dataIndex: 'password',
  //   render: renderContent,
  // },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    render: renderContent,
  },
  {
    title: 'Created On',
    dataIndex: 'createdOn',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    render: renderContent,
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    render: renderContent,
  },
  {
    // title: 'Options',
    // colSpan: 2,
    dataIndex: 'edit',
    render: renderContent,
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    edit: <Button><Icon type="edit" style={{ fontSize: '25px' }} /></Button>,
    name: `London, Park Lane no. ${i}`,
    createdOn: '5 March 2011',
    createdBy: 'Rishabh',
  });
}

class AllSignTableDemo extends React.Component {
  state = {
    selectedRowKeys: [],
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()], // 0...45
            });
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <div>
        <Table rowSelection={rowSelection} size="small" columns={columns} dataSource={data} onChange={this.onChange} />
      </div>
    );
  }
}

export default AllSignTableDemo;
