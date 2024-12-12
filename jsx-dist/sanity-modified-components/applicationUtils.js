import React from 'react';
import FirstItemStyle from './applicationStyles';
const FirstItem = ({
  children,
  isFirstItem
}) => {
  let parentTag = '';
  if (isFirstItem) {
    parentTag = /*#__PURE__*/React.createElement(FirstItemStyle, null, children);
  } else {
    parentTag = /*#__PURE__*/React.createElement("div", null, children);
  }
  return parentTag;
};
export default FirstItem;