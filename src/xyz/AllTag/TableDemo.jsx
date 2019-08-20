/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-plusplus */
import React from 'react';
import {
  Table, Modal, Button,
} from 'antd';

// const data = [];
// for (let i = 0; i < 246; i++) {
//   data.push({
//     key: i,
//     tagName: `Martin Luther ${i}`,
//     dataType: 32,
//     code: `London, Park Lane no. ${i}`,
//     entity: 'Employee',
//     createdBy: 'Rishabh',
//     createdOn: '5 March 2011',
//     templates: 3,
//   });
// }

const data = [
  {
    tagName: 'NDA',
    dataType: 'String',
    code: '#app@emp#',
    entity: 'Employee',
    createdBy: 'Rishabh',
    createdOn: '5 March 1994',
    templates: 3,
  },
  {
    tagName: 'Appraisal Letter',
    dataType: 'String',
    code: '#appperiod@emp#',
    entity: 'Employee',
    createdBy: 'Rishabh',
    createdOn: '2 April 2011',
    templates: 3,
  },
  {
    tagName: 'Offer Letter',
    dataType: 'String',
    code: '#appoffer@intern#',
    entity: 'Candidate',
    createdBy: 'Rishabh',
    createdOn: '23 May 1995',
    templates: 3,
  },
  {
    tagName: 'Appraisal Letter',
    dataType: 'String',
    code: '#apppromote@emp#',
    entity: 'Employee',
    createdBy: 'Rishabh',
    createdOn: '26 August 1997',
    templates: 3,
  },
];

const templateData = [
  {
    sno: 1,
    templateName: 'Appraisal Letter',
  },
  {
    sno: 2,
    templateName: 'Offer Letter',
  },
  {
    sno: 3,
    templateName: 'NDA',
  },
];

class TableDemo extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    console.log('I AM HERE');
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1000);
  };

  handleCancel = () => {
    console.log('Inside Cancel Handler');
    this.setState({
      visible: false,
    });
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys, visible, confirmLoading } = this.state;
    const templateColumns = [
      {
        title: 'S.No.',
        dataIndex: 'sno',
      },
      {
        title: 'Template Name',
        dataIndex: 'templateName',
      },
    ];
    const columns = [
      {
        title: 'Tag Name',
        dataIndex: 'tagName',
      },
      {
        title: 'Data Type',
        dataIndex: 'dataType',
      },
      {
        title: 'Code',
        dataIndex: 'code',
      },
      {
        title: 'Entity',
        dataIndex: 'entity',
      },
      {
        title: 'Created By',
        dataIndex: 'createdBy',
      },
      {
        title: 'Created On',
        dataIndex: 'createdOn',
      },
      {
        title: 'Templates',
        dataIndex: 'templates',
        render: (text, record) => (
          <Button shape="round" onClick={this.showModal}>
            {/* <a href="javascript:;">{record.templates}</a> */}
            {record.templates}
            <Modal
              title="Templates"
              centered="true"
              width
              visible={visible}
              zIndex="250"
              // confirmLoading
              // onOk={this.handleOk}
              // onCancel={this.handleCancel}
            >
              <Table
                confirmLoading={confirmLoading}
                columns={templateColumns}
                dataSource={templateData}
              />
            </Modal>
          </Button>
        ),
      },
    ];
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
      <div style={{ backgroundColor: 'white' }}>
        <Table rowSelection={rowSelection} bordered size="small" columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default TableDemo;
