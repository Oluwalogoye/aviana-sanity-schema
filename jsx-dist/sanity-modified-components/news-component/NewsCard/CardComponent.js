import React, { useState, useEffect } from "react";
import { fetchImage } from '../../../query';
import styles, { Card, LymeLink } from './componentStyles';
import htm from 'htm';
import vhtml from 'vhtml';
import { toHTML, uriLooksSafe } from '@portabletext/to-html';
const html = htm.bind(vhtml);
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
    }, value.text)
  },
  marks: {
    link: ({
      children,
      value
    }) => {
      // ⚠️ `value.href` IS NOT "SAFE" BY DEFAULT ⚠️
      // ⚠️ Make sure you sanitize/validate the href! ⚠️
      const href = value.href || '';
      if (uriLooksSafe(href)) {
        const rel = href.startsWith('https://') ? undefined : 'noreferrer noopener';
        return /*#__PURE__*/React.createElement(LymeLink, {
          href: href,
          rel: rel
        }, children);
      }

      // If the URI appears unsafe, render the children (eg, text) without the link
      return children;
    }
    // strong: ({children}) => {
    //   return html`<b style="font-weight: bold;">${children}</b>`
    // }
  },
  block: {
    strong: ({
      children
    }) => /*#__PURE__*/React.createElement("b", null, children)
  }
};
const CardComponent = ({
  title,
  imageSrc,
  caption,
  buttonText,
  onButtonClick,
  onClick
}) => {
  const [image, setImage] = useState(null);
  const imageRef = imageSrc?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setImage(image?.url);
      });
    } else {
      setImage(imageSrc?.asset?.url);
    }
  }, [imageSrc]);
  if (!image && imageRef) return /*#__PURE__*/React.createElement("div", null, "Loading...");

  // const formattedCaption = toHTML(caption, {components: myPortableTextComponents})
  // const cardImageUrl = imageSrc?.asset?.url;
  const cardImageUrl = image;
  console.log("In CardComponent, here image is", image);
  return (
    /*#__PURE__*/
    // <div className="card" onClick={onClick}> {/* Use the onClick prop here */}
    React.createElement(Card, null, /*#__PURE__*/React.createElement("img", {
      alt: "Event",
      style: styles.cardImage,
      src: cardImageUrl
    }), /*#__PURE__*/React.createElement("div", {
      style: styles.cardContent
    }, /*#__PURE__*/React.createElement("h2", {
      style: styles.cardTitle
    }, title), /*#__PURE__*/React.createElement(PortableText, {
      value: caption,
      components: myPortableTextComponents
    }), /*#__PURE__*/React.createElement("div", {
      style: styles.clickButton
    }, buttonText)))
  );
};
export default CardComponent;