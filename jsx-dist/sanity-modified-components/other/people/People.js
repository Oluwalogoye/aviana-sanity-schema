import React, { useEffect } from 'react';
import { OurTeamSection, Body } from './componentStyles';
import Person from './person/Person';
const People = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "People: content null");
  const {
    title,
    everyone
  } = content;
  console.log('People content', content);

  // Pre-render the content into a single HTML structure
  const renderPairs = () => {
    const resultArray = [];
    const numPairs = Math.ceil(everyone.length / 2);
    let pairCount = 0;
    for (let i = 0; i < everyone.length; i += 2) {
      pairCount++;
      resultArray.push(/*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        className: "tmm_container"
      }, /*#__PURE__*/React.createElement(Person, {
        person: everyone[i]
      }), i + 1 < everyone.length && /*#__PURE__*/React.createElement(Person, {
        person: everyone[i + 1],
        isSecondInPair: true
      })), pairCount !== numPairs && /*#__PURE__*/React.createElement("span", {
        className: "tmm_columns_containers_desktop"
      })));
    }
    return resultArray;
  };
  const pairs = renderPairs();
  return /*#__PURE__*/React.createElement(OurTeamSection, null, /*#__PURE__*/React.createElement("div", {
    className: "title-search-category-container"
  }, /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement("div", {
    id: "content-inside",
    className: "container no-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    id: "primary",
    className: "content-area"
  }, /*#__PURE__*/React.createElement("main", {
    id: "main",
    className: "site-main",
    role: "main"
  }, /*#__PURE__*/React.createElement("article", {
    id: "post-109",
    className: "post-109 page type-page status-publish hentry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tmm tmm_boardofdirectors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tmm_2_columns tmm_wrap tmm_plugin_f"
  }, pairs)))))))));
};
export default People;