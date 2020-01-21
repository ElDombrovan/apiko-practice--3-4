import React from "react";
import T from "prop-types";

const TextLabel = ({ size, children }) => {
  return <p style={{ fontSize: size }}>{children}</p>;
};

TextLabel.propTypes = {
  size: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
};

TextLabel.defaultProps = {
  size: "14px"
};

export default TextLabel;
