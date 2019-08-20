/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Tabs,
  Tooltip,
} from 'antd';
import TableDemo from './TableDemo';

class AllTag extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
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
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const { TabPane } = Tabs;
    const { Search, TextArea } = Input;
    const { Item } = Form;
    const { Option } = Select;
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 22 },
        sm: { span: 18 },
      },
    };
    const operations = (
      <div style={{ display: 'flex' }}>
        <Search placeholder="Input Search Text" style={{ alignSelf: 'flex-end', marginRight: '12px', marginBottom: '4px' }} onSearch={value => console.log(value)} enterButton />
        <Tooltip placement="top" title="Add New Tag">
          <Button style={{ alignSelf: 'flex-end', marginRight: '7px' }} type="primary" onClick={this.showModal} icon="plus">Create New</Button>
          <Modal
            title="Add Tags"
            centered="true"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            confirmLoading
            zIndex="450"
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" loading={confirmLoading} onClick={this.handleOk}>
                Save
              </Button>,
            ]}
          >
            <Form {...formItemLayout}>
              <Item label="Tag Name" required>
                <Input placeholder="Enter Tag Name...." />
              </Item>
              <Item label="Data Type" required>
                <Select
                  placeholder="Select an option from dropdown and change input text above"
                >
                  <Option value="abc">ABC</Option>
                  <Option value="pqr">PQR</Option>
                  <Option value="xyz">XYZ</Option>
                </Select>
              </Item>
              <Item label="Entity" required>
                <Select
                  placeholder="Select an option from dropdown and change input text above"
                >
                  <Option value="abc">ABC</Option>
                  <Option value="pqr">PQR</Option>
                  <Option value="xyz">XYZ</Option>
                </Select>
              </Item>
              <Item label="Code" required>
                <Input placeholder="Code must be inside ## Eg: #XYZ#" />
              </Item>
              <Item label="Description" required>
                <TextArea />
              </Item>
            </Form>
          </Modal>
        </Tooltip>
      </div>
    );
    return (
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Custom" key="1">
          <TableDemo />
        </TabPane>
        <TabPane tab="System" key="2">
          <TableDemo />
        </TabPane>
      </Tabs>
    );
  }
}

export default AllTag;
