import React from 'react';
import styles, { Button } from './componentStyles'; // Import styles and Button
import { toCamelCase } from '../../utils';
const CallToAction = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "CallToAction: content null");
  const {
    logo,
    title,
    descriptions,
    hideLogo,
    backgroundImage,
    link,
    buttonName
  } = content;
  console.log("content", content);
  const backgroundImageUrl = backgroundImage?.asset?.url;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  };
  const logoImageUrl = logo?.asset?.url;
  // const logoImageStyle = {
  //   backgroundImage: `url('${logoImageUrl}')`
  // }

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
  const plainTextDescriptions = descriptions ? toPlainText(descriptions) : '';
  const logoClass = hideLogo ? styles.logoHidden : styles.logo;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.rollinsContainer,
      ...backgroundStyle
    }
  }, !hideLogo && /*#__PURE__*/React.createElement("img", {
    src: logoImageUrl,
    style: {
      ...logoClass
    },
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("h3", {
    style: styles.title
  }, title), plainTextDescriptions.split('\n\n').map((description, index) => /*#__PURE__*/React.createElement("p", {
    key: index,
    style: styles.description
  }, description)), buttonName && /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement("span", null, buttonName)));
};
export default CallToAction;