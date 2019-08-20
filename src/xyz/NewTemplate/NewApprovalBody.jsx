/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Card, Form, Input, Select, Button,
} from 'antd';

class NewApprovalBody extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };
    return (
      <div>
        <Card style={{ border: '1px solid #8c8c8c', margin: '0px 5px' }}>
          <Form {...formItemLayout}>
            <Form.Item label="Phase Name">
              <Input value="Phase 1" />
            </Form.Item>
            <Form.Item label="Department" required>
              <Select
                placeholder="Select an option from dropdown and change input text above"
              >
                <Select.Option value="abc">C.E.O</Select.Option>
                <Select.Option value="pqr">H.R</Select.Option>
                <Select.Option value="xyz">Account</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Employee Name">
              <Select
                placeholder="Select an option from dropdown and change input text above"
              >
                <Select.Option value="abc">Sid Sir</Select.Option>
                <Select.Option value="pqr">Anil Sir</Select.Option>
                <Select.Option value="xyz">Bhanu Sir</Select.Option>
              </Select>
            </Form.Item>
            <Button type="primary">
              Add More
            </Button>
          </Form>
        </Card>
        <Card style={{ border: '1px solid #8c8c8c', margin: '2px 5px' }}>
          <Form {...formItemLayout}>
            <Form.Item label="Phase Name">
              <Input value="Phase 2" />
            </Form.Item>
            <Form.Item label="Department" required>
              <Select
                placeholder="Select an option from dropdown and change input text above"
              >
                <Select.Option value="xyz">Account</Select.Option>
                <Select.Option value="abc">C.E.O</Select.Option>
                <Select.Option value="pqr">H.R</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Employee Name">
              <Select
                placeholder="Select an option from dropdown and change input text above"
              >
                <Select.Option value="abc">Gaurav</Select.Option>
                <Select.Option value="pqr">ABC</Select.Option>
                <Select.Option value="xyz">XYZ</Select.Option>
              </Select>
            </Form.Item>
            <Button type="primary">
              Add More
            </Button>
          </Form>
        </Card>
        <Card>
          <Button type="primary">Save</Button>
          <Button type="primary" icon="plus" style={{ marginLeft: '10px' }}>Add Phase</Button>
        </Card>
      </div>
    );
  }
}

export default NewApprovalBody;
