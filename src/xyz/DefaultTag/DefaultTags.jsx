/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Button,
  Input,
  Tooltip,
  Modal,
  Form,
  Select,
} from 'antd';

class DefaultTag extends React.Component {
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
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <Button
          style={{
            alignSelf: 'flex-end',
            marginRight: '7px',
            marginTop: '9px',
            marginBottom: '9px',
          }}
          type="primary"
          icon="plus"
          onClick={this.showModal}
        >
          Create New
        </Button>
        <div style={{ display: 'flex' }}>
          <Tooltip placement="top" title="Add New Tag">
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
        <Form {...formItemLayout} labelAlign="right">
          <Form.Item label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item label="CEO Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Address">
            <Input />
          </Form.Item>
          <Form.Item label="Office Location">
            <Input />
          </Form.Item>
          <Form.Item label="Duration Of Training">
            <Input />
          </Form.Item>
          <Form.Item label="Retirement Age">
            <Input />
          </Form.Item>
          <Form.Item label="Probation Period">
            <Input />
          </Form.Item>
          <Form.Item label="Period Prior Notice">
            <Input />
          </Form.Item>
          <Form.Item label="Notice Period">
            <Input />
          </Form.Item>
          <Form.Item label="Company Liability Period">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number Of Company">
            <Input />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default DefaultTag;
