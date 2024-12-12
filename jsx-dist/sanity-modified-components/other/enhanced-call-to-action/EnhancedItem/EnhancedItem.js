import React from 'react';
import styles from '../componentStyles';
const EnhancedItem = ({
  content
}) => {
  const {
    title,
    image,
    descriptions
  } = content;
  function toPlainText(blocks = []) {
    return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      // loop through the children spans, and join the 
      // text strings
      return block.children.map(child => child.text).join('');
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n');
  }
  const imageUrl = image?.asset?.url;
  const plainTextDescriptions = toPlainText(descriptions);
  return /*#__PURE__*/React.createElement("div", {
    style: styles.headerWrapper
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    style: styles.img,
    alt: title
  }), /*#__PURE__*/React.createElement("h2", null, title), plainTextDescriptions.split('\n\n').map((description, index) => /*#__PURE__*/React.createElement("p", {
    key: index
  }, description)));
};
export default EnhancedItem;