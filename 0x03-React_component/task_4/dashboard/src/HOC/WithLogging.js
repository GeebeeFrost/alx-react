import React from "react";

const WithLogging = (WrappedComponent) => {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }

  WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  class NewComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappedComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return NewComponent;
};

export default WithLogging;
