import React from 'react';
// import { Button } from 'antd';
import { Button } from '../../components/Button';
import {
  ButtonCreate, ButtonDelete, ButtonEdit, ButtonView, Form, Table,
} from '../../components';
// import "./styles.less";

export class DummyComponent extends React.PureComponent {
  render() {
    return (
      <>
        <Button>Ola</Button>
        <ButtonCreate text="Create" />
        <ButtonEdit text="Edit" />
        <ButtonDelete text="Delete" />
        <ButtonView text="View" />
        <Table
          columns={[
            {
              title: 'Attendee Name',
              dataIndex: 'attendeeName',
              align: 'center',
            },
            {
              title: 'Reviewer Name',
              dataIndex: 'reviewerName',
              align: 'center',
            },
          ]}
          data={[
            {
              attendeeName: 'Mike',
              reviewerName: 'Daniel',
            },
            {
              attendeeName: 'John',
              reviewerName: 'Bob',
            },
          ]}
        />
        <Form />
      </>
    );
  }
}


// import React from 'react';
// import {
//   BrowserRouter, Switch, Route,
// } from 'react-router-dom';
// import {
//   AllTagLayout,
//   DefaultTagLayout,
//   AllSign,
//   NewTemplateLayout,
//   AllTemplateLayout,
//   EntityLayout,
//   NoMatch,
// } from '../../xyz';
// import {
//   ButtonCreate, ButtonDelete, ButtonEdit,
// } from '../../components';

// export class DummyComponent extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ButtonCreate text="Create New" />
//         <ButtonCreate text="Hello" type="green" />
//         <ButtonDelete text="Delete" />
//         <ButtonDelete text="Move To Trash" type="violet" />
//         <ButtonEdit text="Edit" type="gray" />
//         <ButtonEdit text="Update" />
//         <ButtonCreate text="Create New" />
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/alltaglayout" component={AllTagLayout} />
//             <Route exact path="/defaulttaglayout" component={DefaultTagLayout} />
//             <Route exact path="/allsign" component={AllSign} />
//             <Route exact path="/newtemplatelayout" component={NewTemplateLayout} />
//             <Route exact path="/alltemplatelayout" component={AllTemplateLayout} />
//             <Route exact path="/entitylayout" component={EntityLayout} />
//             <Route exact path="" component={NoMatch} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
