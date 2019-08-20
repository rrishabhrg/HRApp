/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable space-before-blocks */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LayoutComponent } from './components';

class Dashboard extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     columns: [],
  //     displayTable: false,
  //     displayUserDetails: false,
  //     collapsed: false,
  //   };
  // }

  // componentDidMount() {
  //   const columns = [
  //     {
  //       title: 'S.No',
  //       dataIndex: 'sNo',
  //       key: 'sNo',
  //     },
  //     {
  //       title: 'Department Name',
  //       dataIndex: 'departmentName',
  //       key: 'departmentName',
  //     },
  //     {
  //       title: 'Created By',
  //       dataIndex: 'createdBy',
  //       key: 'createdBy',
  //     },
  //     {
  //       title: 'Created On',
  //       key: 'createdOn',
  //       dataIndex: 'createdOn',
  //     },
  //   ];

  //   const data = [];
  //   for (let i = 1; i <= 50; i++) {
  //     data.push({
  //       key: i,
  //       sNo: i,
  //       departmentName: 'HR',
  //       createdBy: 'Anil Chauhan',
  //       createdOn: '5 MARCH 2018',
  //     });
  //   }
  //   this.setState({
  //     columns,
  //     data,
  //   });
  // }

  // handleDepartmentClick = () => {
  //   this.setState({
  //     displayTable: true,
  //     displayUserDetails: false,
  //   });
  // }

  // onCollapse = (collapsed) => {
  //   this.setState({ collapsed });
  // };

  // handleMenuChange = (event) => {
  //   console.log('selected', event.item.props.eventKey);
  // }

  // handleDisplayUserDetail = () => {
  //   this.setState({
  //     displayUserDetails: true,
  //     displayTable: false,
  //   });
  //   console.log('displayUserDetails--->>> handler', this.state.displayUserDetails);
  // }

  render() {
    // const {
    //   columns, data, displayUserDetails, collapsed, displayTable,
    // } = this.state;
    const { children } = this.props;
    return (
      <LayoutComponent comp={children} />
    );
  }
}

export default Dashboard;
