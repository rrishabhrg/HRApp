/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button, List, Icon,
} from 'antd';
import TemplateDetail from './TemplateDetail';

const modalRoot = document.getElementById('modal-root');
const data = [
  {
    value: 'Offer Letter Template',
  },
  {
    value: 'Appraisal',
  },
  {
    value: 'NDA',
  },
  {
    value: 'Relieving Template',
  },
];

class TemplateModal extends React.Component {
  state = {
    openModal: false,
  }

  handleOpenDetailTemplate = () => {
    console.log('inside details area');
    this.setState({ openModal: true });
  }

  handleCloseDetailTemplate = () => {
    this.setState({ openModal: false });
  }

  render() {
    const { onClose, children } = this.props;
    const { openModal } = this.state;
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'start',
          alignItems: 'center',
          backgroundColor: 'rgba(5,20,30,0.3)',
        }}
        onClick={onClose}
      >
        <div
          style={{
            padding: 20,
            margin: '1rem',
            background: '#fff',
            display: 'inline-block',
            minWidth: '300px',
          }}
        >
          {children}
          <hr />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
                border: '1px solid #d9d9d9',
                padding: '10px 0',
              }}
            >
              <Icon type="search" style={{ fontSize: '1.6rem', alignSelf: 'center', flex: 1 }} />
              <div
                style={{
                  display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: 1,
                }}
              >
                <Icon type="caret-up" />
                <Icon type="caret-down" />
              </div>
              <Icon type="sort-ascending" style={{ fontSize: '2rem', alignSelf: 'center', flex: 1 }} />
            </div>
            <List
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Button onClick={this.handleOpenDetailTemplate}>
                    {item.value}
                  </Button>
                  {openModal ? (
                    <TemplateDetail onClose={this.handleCloseDetailTemplate}>
                      Details
                    </TemplateDetail>
                  ) : null}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default TemplateModal;
