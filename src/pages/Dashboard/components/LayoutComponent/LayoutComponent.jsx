/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import {
  Layout,
  Menu,
  Icon,
  Dropdown,
} from 'antd';
import DisplayComponent from '../DisplayComponent/DisplayComponent';

const {
  Header,
  Sider,
  Content,
} = Layout;

class LayoutComponent extends React.PureComponent {
  state = {
    displayUserDetails: false,
  };

  handleDisplayUserDetail = () => {
    this.setState({
      displayUserDetails: true,
    });
  }


  render() {
    const {
      collapsed, onCollapse, onMenuHandleChange, handleDisplayUserDetail, comp,
    } = this.props;
    const menu = (
      <Menu onClick={onMenuHandleChange}>
        <Menu.Item key="userProfile" onClick={handleDisplayUserDetail}>User Profile</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    );
    return (
      <>
        <Layout>
          <Header
            style={{
              display: 'flex', flexDirection: 'row-reverse', alignItems: 'center',
            }}
          >
            <div>
              <Icon type="bell" style={{ fontSize: '1.2em', margin: '1em', color: '#fff' }} theme="outlined" />
              <Dropdown overlay={menu}>
                <Icon type="user" style={{ fontSize: '1.2em', margin: '1em', color: '#fff' }} theme="outlined" />
              </Dropdown>
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://successive.tech/wp-content/uploads/2016/03/logo-3.png" alt="successive" className="img-responsive" />
            </div>
          </Header>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={collapsed} onCollapse={onCollapse} />
            <Content>
              <DisplayComponent comp={comp} />
            </Content>
          </Layout>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            background: 'black',
          }}
          >
            <span style={{ color: 'gray' }}> Ⓒ Successive Technologies</span>
          </div>
        </Layout>
      </>
    );
  }
}

export default LayoutComponent;
