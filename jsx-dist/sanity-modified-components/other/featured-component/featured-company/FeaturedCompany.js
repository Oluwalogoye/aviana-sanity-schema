import React from 'react';
const FeaturedCompany = ({
  name,
  logo,
  url
}) => {
  return /*#__PURE__*/React.createElement("a", {
    href: url
  }, /*#__PURE__*/React.createElement("img", {
    src: logo.asset.url,
    alt: name
  }));
};
export default FeaturedCompany;