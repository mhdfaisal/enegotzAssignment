import React from "react";
import Header from "../Components/Header/Header";
export default ChildComponent => {
  class ComposedComponent extends React.Component {
    render() {
      return (
        <>
          <Header />
          <ChildComponent {...this.props} />
        </>
      );
    }
  }

  return ComposedComponent;
};
