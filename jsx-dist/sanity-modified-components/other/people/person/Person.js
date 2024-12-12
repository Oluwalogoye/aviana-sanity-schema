import React, { useState, useEffect } from 'react';
import { fetchImage } from '../../../../query';
const Person = ({
  person,
  isSecondInPair = false
}) => {
  const {
    name,
    image,
    title,
    description
  } = person;
  const [imageSrc, setImageSrc] = useState(null);

  // Convert Sanity Block to plain paragraph
  function toPlainText(blocks = []) {
    console.log("blocks in toPlainText of Person class", blocks);
    return blocks
    // 
    .map(block => {
      //
      //
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      //
      //
      return block.children.map(child => child.text).join('');
    })
    //
    .join('\n\n');
  }
  const plainTextDescription = toPlainText(description);
  console.log('plainTextDescription', plainTextDescription);
  const imageRef = image?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setImageSrc(image?.url);
      });
    } else {
      setImageSrc(image?.asset?.url);
    }
  }, [image]);
  if (!imageSrc && imageRef) return /*#__PURE__*/React.createElement("div", null, "Loading...");
  const backgroundImageUrl = imageSrc;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`
  };
  const names = name.split(' ');
  const firstName = names.length >= 1 ? names[0] : '';
  const lastName = names.length >= 2 ? names.splice(1).join(' ') : '';
  return (
    /*#__PURE__*/
    // <div>Hello there from person. isSecondInPair? {isSecondInPair ? <p>true</p> : <p>false</p>}</div>
    React.createElement("div", {
      className: "tmm_member"
    }, /*#__PURE__*/React.createElement("div", {
      style: backgroundStyle,
      className: "tmm_photo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tmm_textblock"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tmm_names"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tmm_fname"
    }, firstName), /*#__PURE__*/React.createElement("span", null, ` `), /*#__PURE__*/React.createElement("span", {
      className: "tmm_lname"
    }, lastName)), /*#__PURE__*/React.createElement("div", {
      className: "tmm_job"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "tmm_desc",
      style: {
        textAlign: "left"
      }
    }, plainTextDescription.split('\n\n').map((paragraph, index) => /*#__PURE__*/React.createElement("p", {
      key: index
    }, paragraph))), /*#__PURE__*/React.createElement("div", {
      className: "tmm_scblock"
    }), !isSecondInPair && /*#__PURE__*/React.createElement("span", {
      className: "tmm_two_containers_tablet"
    })))
  );
};
export default Person;