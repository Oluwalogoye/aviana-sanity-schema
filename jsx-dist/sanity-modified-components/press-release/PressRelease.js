import React, { useState, useEffect } from "react";
import styles, { PressReleaseContainer } from './componentStyles';
import { fetchImage } from '../../query';
import { uriLooksSafe } from '@portabletext/to-html';
import { PortableText } from '@portabletext/react';
const myPortableTextComponents = {
  types: {
    image: ({
      value
    }) => /*#__PURE__*/React.createElement("img", {
      src: value.imageUrl
    }),
    callToAction: ({
      value,
      isInline
    }) => isInline ? /*#__PURE__*/React.createElement("a", {
      href: value.url
    }, value.text) : /*#__PURE__*/React.createElement("div", {
      className: "callToAction"
    })
  },
  marks: {
    link: ({
      children,
      value
    }) => {
      // `value.href` IS NOT "SAFE" BY DEFAULT
      // Make sure you sanitize/validate the href!
      const href = value.href || '';
      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener';
        return /*#__PURE__*/React.createElement("a", {
          href: href,
          rel: rel
        }, children);
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children;
    },
    strong: ({
      children
    }) => /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 'bold'
      }
    }, children)
  }
};
const PressRelease = ({
  content
}) => {
  console.log("Press release content", content);
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "PressRelease: content null");
  const {
    title,
    image,
    descriptions
  } = content;
  const [localImage, setLocalImage] = useState(null);
  const imageRef = image?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setLocalImage(image?.url);
      });
    } else {
      setLocalImage(image?.asset?.url);
    }
  }, [image]);
  if (!localImage && imageRef) return /*#__PURE__*/React.createElement("div", null, "Loading ...");
  const imageUrl = localImage;
  return /*#__PURE__*/React.createElement(PressReleaseContainer, null, /*#__PURE__*/React.createElement("h1", null, "Press Release: ", title), /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: `Image for ${title}`
  }), descriptions && /*#__PURE__*/React.createElement(PortableText, {
    value: descriptions,
    components: myPortableTextComponents
  }));
};
export default PressRelease;