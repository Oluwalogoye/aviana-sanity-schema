// EnhancedCallToAction.js
import React from 'react';
import styles, { Button } from './componentStyles';
import EnhancedItem from './EnhancedItem/EnhancedItem';
const EnhancedCallToAction = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "EnhancedCallToAction: content null");
  const {
    enhancedItems,
    title,
    backgroundImage
  } = content;
  const backgroundImageUrl = backgroundImage?.asset?.url;
  const additionalStyles = {
    backgroundImage: `url('${backgroundImageUrl}')`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.enhancedContainer,
      ...additionalStyles
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: styles.enhancedCtaHeader
  }, title), /*#__PURE__*/React.createElement("div", {
    style: styles.headersContainer
  }, enhancedItems && enhancedItems.map((item, index) => /*#__PURE__*/React.createElement(EnhancedItem, {
    key: index,
    content: item
  }))));
};
export default EnhancedCallToAction;