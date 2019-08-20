/* eslint-disable react/prop-types */
import React from 'react';

class DisplayComponent extends React.PureComponent {
  render() {
    const { comp } = this.props;
    return (
      <>
        {comp}
      </>
    );
  }
}

export default DisplayComponent;
