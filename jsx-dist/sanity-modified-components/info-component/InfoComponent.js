import React from 'react';
import styles from './componentStyles';
import { Details } from './componentStyles';
const InfoComponent = ({
  content
}) => {
  if (!content) return /*#__PURE__*/React.createElement("div", null, "InfoComponent: content null");
  const {
    header,
    paragraphs,
    dots
  } = content;

  // Convert Sanity Block to plain Text
  function toPlainText(blocks = []) {
    return blocks.map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    }).join('\n\n');
  }
  const plainTextParagraphs = toPlainText(paragraphs);
  return /*#__PURE__*/React.createElement("div", {
    style: styles.advisorContainer
  }, /*#__PURE__*/React.createElement(Details, null, dots && /*#__PURE__*/React.createElement("img", {
    src: dots.asset.url,
    alt: "Decorative dots"
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.advisorHeader
  }, /*#__PURE__*/React.createElement("h1", {
    style: styles.advisorHeaderH1
  }, header)), /*#__PURE__*/React.createElement("div", {
    style: styles.advisorContent
  }, plainTextParagraphs.split('\n\n').map((paragraph, index) => /*#__PURE__*/React.createElement("p", {
    key: index,
    style: styles.paragraph
  }, paragraph))));
};
export default InfoComponent;