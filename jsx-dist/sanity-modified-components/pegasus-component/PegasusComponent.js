import React from 'react';
import CallToAction from '../call-to-action/CallToAction';
const PegasusComponent = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "PegasusComponent: content null");
  const {
    logo,
    title,
    descriptions
  } = content;
  return /*#__PURE__*/React.createElement(CallToAction, {
    content: content
  });
};
export default PegasusComponent;