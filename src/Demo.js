import React from "react";

class Demo extends React.Component {
  render() {
    return (
      <>{this.props.name} {this.props.work}</>
    )
  }
}

export default Demo;