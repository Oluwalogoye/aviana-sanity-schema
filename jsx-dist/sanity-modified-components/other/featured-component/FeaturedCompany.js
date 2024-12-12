import React from 'react';
import { FeaturedLogosContainer } from './componentStyles';
import FeaturedCompany from './featured-company/FeaturedCompany';
const FeaturedComponent = ({
  content
}) => {
  const {
    title,
    featuredCompanies
  } = content;
  return /*#__PURE__*/React.createElement(FeaturedLogosContainer, null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("div", {
    className: "logos"
  }, featuredCompanies.map(({
    logo,
    url
  }, index) => /*#__PURE__*/React.createElement(FeaturedCompany, {
    key: index,
    logo: logo,
    url: url
  }))));
};
export default FeaturedComponent;