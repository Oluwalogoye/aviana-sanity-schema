import React from 'react';
import PressRelease from '../../sanity-modified-components/press-release/PressRelease';
import styles from '../indexStyles';
const PressReleasePreview = ({
  document
}) => {
  console.log("document.displayed", document.displayed);
  return /*#__PURE__*/React.createElement(PressRelease, {
    style: styles.body,
    content: document.displayed
  });
};
export default PressReleasePreview;