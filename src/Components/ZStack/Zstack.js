import React from "react";

const ZStack = ({ children }) => {
  const reversedChildren = React.Children.toArray(children).reverse();

  return reversedChildren.reduce((acc, child) => {
    if (!acc) {
      return child;
    }

    return (
      <div style={{ position: "absolute" ,left:'0%',right:'0%',bottom:'0%',top:'0%' }}>
        {child}
        {acc}
      </div>
    );
  }, null);
};

export default ZStack;
