/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Form, Input, Select } from 'antd';
import './style.less';

class BasicForm extends React.Component {
  render() {
    const { Item } = Form;
    const { Option } = Select;
    const { TextArea } = Input;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 6 },
    };
    return (
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
    );
  }
}

export default BasicForm;
