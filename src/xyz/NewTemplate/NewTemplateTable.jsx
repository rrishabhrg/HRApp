/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-plusplus */
import React from 'react';
import {
  Table, Input, Button, Icon,
} from 'antd';

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    tag: `Martin Luther ${i}`,
    description: 32,
    code: `London, Park Lane no. ${i}`,
  });
}

class NewTemplateTable extends React.Component {
  state = {
    searchText: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Tag',
        dataIndex: 'tag',
        ...this.getColumnSearchProps('tag'),
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Code',
        dataIndex: 'code',
      },
    ];
    return <Table bordered size="small" columns={columns} dataSource={data} />;
  }
}

export default NewTemplateTable;
