/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Card, Row, Col, Icon, Button, Input,
} from 'antd';
import EntityModal from './EntityModal';

class Entity extends React.Component {
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
    const { Search } = Input;
    const { showModal } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Search
          enterButton
          placeholder="Input Search Text"
          style={{
            alignSelf: 'flex-end',
            width: '25%',
            marginBottom: '7px',
            marginRight: '12px',
          }}
        />
        <div
          style={{
            borderRadius: '5px', background: 'lightGrey', padding: '30px', margin: '0 10px',
          }}
        >
          <Row gutter={16}>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  BANK
                  <br />
                  <Icon type="file" />
                  2
                </Button>
                {showModal ? (
                  <EntityModal onClose={this.handleCloseModal}>
                    BANK
                  </EntityModal>
                ) : null}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  EMPLOYEES
                  <br />
                  <Icon type="user" />
                  30
                </Button>
                {showModal ? (
                  <EntityModal onClose={this.handleCloseModal}>
                    EMPLOYEES
                  </EntityModal>
                ) : null}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  CLIENTS
                  <br />
                  <Icon type="user" />
                  10
                </Button>
                {showModal ? (
                  <EntityModal onClose={this.handleCloseModal}>
                    CLIENTS
                  </EntityModal>
                ) : null}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Button size="large" onClick={this.handleOpenModal} type="primary" style={{ height: '1%', width: '100%' }}>
                  CANDIDATE
                  <br />
                  <Icon type="user" />
                  50
                </Button>
                {showModal ? (
                  <EntityModal onClose={this.handleCloseModal}>
                    CANDIDATE
                  </EntityModal>
                ) : null}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Entity;
