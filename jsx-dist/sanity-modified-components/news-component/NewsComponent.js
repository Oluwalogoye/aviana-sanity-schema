import React from 'react';
import styles, { MainContainer, NewsContainer } from './componentStyles';
import CardComponent from './NewsCard/CardComponent';
function NewsComponent({
  content
}) {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "PegasusComponent: content null");
  const {
    title,
    newsItems,
    dots
  } = content;
  console.log("In NewsComponent, content is", content);
  return /*#__PURE__*/React.createElement(MainContainer, {
    style: {}
  }, dots && /*#__PURE__*/React.createElement("img", {
    src: dots,
    style: styles.mainContainer.dots,
    alt: "Decorative dots"
  }), title && /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("h3", null), " ", /*#__PURE__*/React.createElement(NewsContainer, null, newsItems?.length && newsItems.map((item, index) => {
    return /*#__PURE__*/React.createElement(CardComponent, {
      key: index,
      title: item.title,
      imageSrc: item.imageSrc,
      caption: item.caption,
      buttonText: item.buttonText || ''
      // Removed: onButtonClick and onClick // No click actions in preview
    });
  })));
}

// ... {rest of the code with defaultProps and propTypes remains the same}

export default NewsComponent;