import React, { useState, useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import { fetchImage } from '../../query';
import { HeaderContainer } from './componentStyles';
const Header = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "Header: content null");
  console.log("Header content", content);
  const {
    menuItems,
    logo
  } = content;
  const [image, setImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const imageRef = logo?.asset?._ref;
  useEffect(() => {
    if (imageRef) {
      fetchImage(imageRef).then(image => {
        setImage(image?.url);
      });
    } else {
      setImage(image?.asset?.url);
    }
  }, [logo]);
  if (!image && imageRef) return /*#__PURE__*/React.createElement("div", null, "Loading ...");
  const logoUrl = image;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = link => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on link click
  };
  return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoUrl,
    alt: "Logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hamburger",
    onClick: toggleMenu
  }, isMenuOpen ? /*#__PURE__*/React.createElement(FiX, {
    className: "hamburger-icon"
  }) : /*#__PURE__*/React.createElement(FiMenu, {
    className: "hamburger-icon"
  })), /*#__PURE__*/React.createElement("ul", null, menuItems && menuItems.filter(item => !item.homePage).map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("a", null, item.name))))), /*#__PURE__*/React.createElement("div", {
    className: "bottom-line"
  })), isMenuOpen && /*#__PURE__*/React.createElement("nav", {
    className: "mobile-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links-container"
  }, menuItems && menuItems.filter(item => !item.homePage).map((item, index) => /*#__PURE__*/React.createElement("a", {
    key: index
  }, item.name)))));
};
export default Header;