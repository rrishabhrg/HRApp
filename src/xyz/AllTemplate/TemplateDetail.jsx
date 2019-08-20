/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import ReactDOM from 'react-dom';

const detailRoot = document.getElementById('detail-root');

class TemplateDetail extends React.Component {
  render() {
    const { onClose, children } = this.props;
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '40',
          bottom: '0',
          left: '60',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'D8A4A4',
        }}
        onClick={onClose}
      >
        <div
          style={{
            padding: 20,
            margin: '1rem',
            background: '#fff',
            display: 'inline-block',
            minWidth: '340px',
            maxHeight: '550px',
          }}
        >
          {children}
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>Hello India</p>
          </div>
        </div>
      </div>,
      detailRoot,
    );
  }
}

export default TemplateDetail;
