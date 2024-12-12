import React from 'react';
import { LymeContainer } from './componentStyles';
import { toHTML, uriLooksSafe } from '@portabletext/to-html';
const myPortableTextComponents = {
  types: {
    image: ({
      value
    }) => `<img src="${value.imageUrl}" />`
  },
  marks: {
    link: ({
      children,
      value
    }) => {
      //
      //
      const href = value?.href || '';
      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener';
        return `<a
              class="lyme-link"
              href="${href}"
              rel="${rel}">
                ${children}
              </a>`;
      }

      //
      return Array.isArray(children) ? children.join('') : String(children);
    },
    strong: ({
      children
    }) => {
      return `<b style="font-weight:bold;">${children}</b>`;
    }
  }
};
const ContentSection = ({
  content
}) => {
  const {
    title,
    images,
    descriptions
  } = content; // Destructure content
  const formattedDescriptions = toHTML(descriptions, {
    components: myPortableTextComponents
  });
  return /*#__PURE__*/React.createElement(LymeContainer, null, /*#__PURE__*/React.createElement("h2", {
    className: "lyme-header"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: images.length == 1 ? 'covid-images-container' : 'lyme-images-container'
  }, images && images.map(image => /*#__PURE__*/React.createElement("img", {
    src: image.asset.url,
    className: "img",
    alt: "Content visual"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lyme-content",
    dangerouslySetInnerHTML: {
      __html: formattedDescriptions
    }
  }));
};
export default ContentSection;