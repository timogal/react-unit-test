import React from 'react';

export default class A extends React.Component {
  render() {
    return (
      <a {...this.props} />
    )
  }
}