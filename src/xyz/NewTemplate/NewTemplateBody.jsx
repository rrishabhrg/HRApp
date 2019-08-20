/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Card, Input, Form, Select, Button, Tabs,
} from 'antd';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import NewTemplateTable from './NewTemplateTable';

class NewTemplateBody extends React.Component {
  render() {
    const callback = (key) => {
      console.log(key);
    };
    // const formItemLayout = {
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 18 },
    // };
    return (
      <Card style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <Form {...formItemLayout} layout="vertical" style={{ display: 'flex', flexDirection: 'column' }}> */}
        <Form layout="vertical" style={{ display: 'flex', flexDirection: 'column' }}>
          <Form.Item label="Title" required>
            <Input placeholder="Enter Title...." />
          </Form.Item>
          <Form.Item label="Entity" required>
            <Select
              placeholder="Select an entity from dropdown and change input text above"
              onChange={this.handleSelectChange}
            >
              <Select.Option value="abc">Client</Select.Option>
              <Select.Option value="pqr">Employee</Select.Option>
              <Select.Option value="xyz">Candidate</Select.Option>
              <Select.Option value="xyz">Bank</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Template Body" required>
            {/* <Card>
              <Editor />
            </Card> */}
          </Form.Item>
          <Form.Item label="Email Body" required>
            {/* <Card>
              <Editor />
            </Card> */}
          </Form.Item>
          <Form.Item label="Tags" required>
            <Button style={{ alignSelf: 'flex-end', marginRight: '7px' }} type="primary" onClick={this.showModal} icon="plus">New Tag</Button>
          </Form.Item>
          <Form.Item style={{ marginLeft: '20%' }}>
            <Tabs onChange={callback} type="card">
              <Tabs.TabPane tab="Custom" key="1">
                {/* Content of Tab Pane 1 */}
                <NewTemplateTable />
              </Tabs.TabPane>
              <Tabs.TabPane tab="System" key="2">
                {/* Content of Tab Pane 2 */}
                <NewTemplateTable />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Entity" key="3">
                {/* Content of Tab Pane 3 */}
                <NewTemplateTable />
              </Tabs.TabPane>
            </Tabs>
          </Form.Item>
          <Form.Item style={{ marginLeft: '20%' }}>Signature</Form.Item>
          <Form.Item style={{ marginLeft: '20%' }}>
            User Signature
            <Select
              placeholder="Select an entity from dropdown and change input text above"
              onChange={this.handleSelectChange}
            >
              <Select.Option value="abc">Client</Select.Option>
              <Select.Option value="pqr">Employee</Select.Option>
              <Select.Option value="xyz">Candidate</Select.Option>
              <Select.Option value="xyz">Bank</Select.Option>
            </Select>
          </Form.Item>
          <Button style={{ display: 'flex', alignSelf: 'flex-end', marginRight: '7px' }} type="primary" onClick={this.showModal}>New Signature</Button>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button style={{ display: 'flex', alignSelf: 'flex-start' }} type="primary">Save</Button>
            <Button style={{ display: 'flex', alignSelf: 'flex-end', marginLeft: '10px' }} type="primary">Cancel</Button>
          </div>
        </Form>
      </Card>
    );
  }
}

export default NewTemplateBody;
