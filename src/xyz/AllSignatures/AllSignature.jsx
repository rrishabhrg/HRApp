/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button,
  Tooltip,
  Modal,
  Form,
  Select,
  Checkbox,
  Icon,
} from 'antd';
import AllSignTableDemo from './AllSignTableDemo';

class AllSignature extends React.Component {
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
    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 20 },
    //     sm: { span: 6 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 22 },
    //     sm: { span: 18 },
    //   },
    // };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <Tooltip placement="top" title="Create New Signature">
          <Button
            style={{
              alignSelf: 'flex-end', marginRight: '7px', marginBottom: '9px', marginTop: '9px',
            }}
            type="primary"
            onClick={this.showModal}
            icon="plus"
          >
            Create New
          </Button>
        </Tooltip>
        <div style={{ display: 'flex' }}>
          <Modal
            title="Add Tags"
            centered="true"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            zIndex="450"
            footer={[
              <Button key="submit" type="primary" loading={confirmLoading} onClick={this.handleOk}>
                  Save
              </Button>,
            ]}
          >
            {/* <Form {...formItemLayout} style={{ maxHeight: '380px', overflowY: 'scroll' }}> */}
            <Form style={{ maxHeight: '380px', overflowY: 'scroll' }}>
              <Form.Item label="Name" required>
                <Select
                  onChange={this.handleSelectChange}
                >
                  <Select.Option value="abc">Priti Singh</Select.Option>
                  <Select.Option value="pqr">Kriti Sanon</Select.Option>
                  <Select.Option value="xyz">Akriti Bansal</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Description" required>
                {/* <Card>
                  <Editor />
                </Card> */}
              </Form.Item>
              <Form.Item label="Image">
                <Icon type="picture" style={{ fontSize: '55px', marginBottom: '20%' }} />
              </Form.Item>
              <Form.Item style={{ marginLeft: '13%' }}>
                <Checkbox>Share to the user to add to profile</Checkbox>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <AllSignTableDemo />
      </div>
    );
  }
}

export default AllSignature;
