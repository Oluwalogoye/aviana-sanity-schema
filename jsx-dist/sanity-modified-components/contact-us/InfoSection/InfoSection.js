import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './componentStyles';
const InfoSection = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "InfoSection: content null");
  const {
    address,
    descriptions,
    addressLink,
    phoneNumber,
    emailAddress,
    backgroundImage
  } = content;
  const backgroundImageUrl = backgroundImage?.asset?.url;
  const additionalStyles = {
    backgroundImage: `url(${backgroundImageUrl})`
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
  const plainTextDescriptions = toPlainText(descriptions);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...styles.pageContainer,
      ...additionalStyles
    }
  }, " ", /*#__PURE__*/React.createElement("main", {
    style: styles.mainContent
  }, descriptions && plainTextDescriptions.split('\n\n').map((description, index) => /*#__PURE__*/React.createElement("h1", {
    key: index
  }, description)
  /* Other content */)), /*#__PURE__*/React.createElement("footer", {
    style: styles.pageFooter
  }, emailAddress && /*#__PURE__*/React.createElement("p", {
    style: styles.pageFooterP
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faEnvelope,
    style: styles.faIcon
  }), /*#__PURE__*/React.createElement("a", {
    style: styles.pageFooterLink,
    href: `mailto:${emailAddress}`
  }, emailAddress)), address && /*#__PURE__*/React.createElement("p", {
    style: styles.pageFooterP
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faMapMarkedAlt,
    style: styles.faIcon
  }), /*#__PURE__*/React.createElement("a", {
    style: styles.pageFooterLink,
    href: addressLink
  }, address)), phoneNumber && /*#__PURE__*/React.createElement("p", {
    style: styles.pageFooterP
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faPhone,
    style: styles.faIcon
  }), /*#__PURE__*/React.createElement("a", {
    style: styles.pageFooterLink,
    href: `tel:${phoneNumber}`
  }, phoneNumber))));
};
export default InfoSection;