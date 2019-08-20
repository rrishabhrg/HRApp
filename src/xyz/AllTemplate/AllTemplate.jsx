/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Card, Row, Col, Icon, Button,
} from 'antd';
import TemplateModal from './TemplateModal';

class AllTemplate extends React.Component {
  state = {
    showModal: false,
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <React.Fragment>
        <Button
          style={{
            alignSelf: 'flex-end',
            marginRight: '7px',
            marginBottom: '9px',
          }}
          type="primary"
          icon="plus"
        >
          New Template
        </Button>
        <div
          style={{
            borderRadius: '5px', background: 'lightGrey', padding: '30px', margin: '0 10px',
          }}
        >
          <Row gutter={16}>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  Templates
                  <br />
                  <Icon type="file" />
                  20
                </Button>
                {showModal ? (
                  <TemplateModal onClose={this.handleCloseModal}>
                    Templates
                  </TemplateModal>
                ) : null}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  Tags Used
                  <br />
                  <Icon type="user" />
                  50
                </Button>
                {showModal ? (
                  <TemplateModal onClose={this.handleCloseModal}>
                    Tags Used
                  </TemplateModal>
                ) : null}
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default AllTemplate;
