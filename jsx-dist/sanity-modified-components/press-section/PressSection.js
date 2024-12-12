import React, { useState } from "react";
import { NewsSection } from './componentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fontawesome/free-solid-svg-icons';
import CardComponent from '../news-component/NewsCard/CardComponent';
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
const PressSection = ({
  content
}) => {
  console.log("Press Section content", content);
  const {
    title,
    pressReleases,
    decorativeImage
  } = content;
  // State to hold the current input in the search field
  const [searchInput, setSearchInput] = useState('');
  const sermonsData = pressReleases;

  // State to hold the filtered sermon data
  const [filteredSermons, setFilteredSermons] = useState([...pressReleases.reverse()]);
  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };
  const handleSearchClick = () => {
    setFilteredSermons(sermonsData.filter(sermon => sermon.title.toLowerCase().includes(searchInput.toLowerCase())).reverse());
  };
  const handleButtonClick = pageTitle => {
    console.log("pageTitle", pageTitle);
    const pathTitle = encodeURIComponent(pageTitle.replace(/[\s.,]+/g, '-'));
    return () => {
      alert(`User will be navigated to /${title.toLowerCase()}/${pathTitle}`);
    };
  };
  return /*#__PURE__*/React.createElement(NewsSection, null, /*#__PURE__*/React.createElement("div", {
    className: "title-search-category-container"
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("div", {
    className: "controls-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search",
    value: searchInput,
    onChange: handleSearchChange
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSearchClick
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faSearchLocation
  }))), /*#__PURE__*/React.createElement("div", {
    className: "category-filter"
  }, /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Filter by Category"))))), /*#__PURE__*/React.createElement("div", {
    className: "news-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: decorativeImage?.asset?.url,
    alt: "Decorative Image",
    className: "dots"
  }), filteredSermons && filteredSermons.map((item, index) => /*#__PURE__*/React.createElement(CardComponent, {
    key: index,
    title: item.title,
    imageSrc: item.image,
    caption: item.shortDescription,
    buttonText: "READ MORE",
    onClick: handleButtonClick(item.title) // Change buttonLink to onClick
  }))));
};
export default PressSection;