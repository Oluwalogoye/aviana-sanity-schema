import React from "react";
import { ImagesContainer, ImageWrapper, FrameContainer } from './componentStyles';
const Frame = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "Frame: content null");
  const {
    featuredItems
  } = content;
  console.log("In Frame.js, content here is", content);

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
    // <div>Hello there</div>
    React.createElement(FrameContainer, null, /*#__PURE__*/React.createElement(ImagesContainer, null, featuredItems.map(({
      title,
      description,
      image
    }, i) => /*#__PURE__*/React.createElement(ImageWrapper, {
      key: i
    }, /*#__PURE__*/React.createElement("img", {
      src: image?.asset?.url,
      alt: title
    }), /*#__PURE__*/React.createElement("h2", null, title), toPlainText(description).split('\n\n').map((description, j) => /*#__PURE__*/React.createElement("p", {
      key: j
    }, description))))))
  );
};
export default Frame;