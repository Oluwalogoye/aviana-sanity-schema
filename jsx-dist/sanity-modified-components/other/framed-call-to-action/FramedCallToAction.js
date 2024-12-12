import React from 'react';
import styles from './componentStyles';
const FramedCallToAction = ({
  content
}) => {
  const {
    backgroundImg,
    framedItems
  } = content;
  const imageUrl = backgroundImg?.asset?.url;
  const additionalStyles = {
    backgroundImage: `url('${imageUrl}')`
  };

  // Convert Sanity Block to plain paragraph
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
  return (
    /*#__PURE__*/
    // <div>Hello</div>
    React.createElement("div", {
      style: {
        ...styles.framedCallToAction,
        ...additionalStyles
      }
    }, framedItems && framedItems.map(({
      title,
      description
    }, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      style: styles.ctaItem
    }, /*#__PURE__*/React.createElement("h3", {
      style: styles.ctaTitle
    }, title), description && toPlainText(description).split('\n\n').map((description, index) => /*#__PURE__*/React.createElement("p", {
      key: index,
      style: styles.ctaDescription
    }, description)))))
  );
};
export default FramedCallToAction;