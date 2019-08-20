/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Tabs,
  Button,
  Input,
  Tooltip,
  Modal,
  Form,
  Select,
} from 'antd';
import NewTemplateBody from './NewTemplateBody';
import NewApprovalBody from './NewApprovalBody';

class NewTemplate extends React.Component {
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

    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 22 },
        sm: { span: 18 },
      },
    };

    const operations = (
      <div style={{ display: 'flex' }}>
        <Tooltip placement="top" title="Add New Tag">
          <Button
            style={{
              alignSelf: 'flex-end', marginRight: '7px',
            }}
            type="primary"
            onClick={this.showModal}
            icon="plus"
          >
            Create New
          </Button>
          <Modal
            title="Add Tags"
            centered="true"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
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
              <Form.Item label="Tag Name" required>
                <Input placeholder="Enter Tag Name...." />
              </Form.Item>
              <Form.Item label="Data Type" required>
                <Select
                  placeholder="Select an option from dropdown and change input text above"
                  onChange={this.handleSelectChange}
                >
                  <Select.Option value="abc">ABC</Select.Option>
                  <Select.Option value="pqr">PQR</Select.Option>
                  <Select.Option value="xyz">XYZ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Entity" required>
                <Select
                  placeholder="Select an option from dropdown and change input text above"
                  onChange={this.handleSelectChange}
                >
                  <Select.Option value="abc">ABC</Select.Option>
                  <Select.Option value="pqr">PQR</Select.Option>
                  <Select.Option value="xyz">XYZ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Code" required>
                <Input placeholder="Code must be inside ## Eg: #XYZ#" />
              </Form.Item>
              <Form.Item label="Description" required>
                <Input.TextArea />
              </Form.Item>
            </Form>
          </Modal>
        </Tooltip>
      </div>
    );
    return (
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Template" key="1">
          {/* Content of Custom */}
          <NewTemplateBody />
        </TabPane>
        <TabPane tab="Approval" key="2">
          {/* Content of System */}
          <NewApprovalBody />
        </TabPane>
      </Tabs>
    );
  }
}

export default NewTemplate;
