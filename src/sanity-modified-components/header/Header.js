import React, { useState, useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import { fetchImage } from '../../query';
import { HeaderContainer } from './componentStyles';

const Header = ({ content }) => {
  if (content == null) return <div>Header: content null</div>;

  console.log("Header content",content);

  const { menuItems, logo } = content;

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

  if (!image && imageRef) return <div>Loading ...</div>;

  const logoUrl = image;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <HeaderContainer>
      <header>
        <nav>
          <a className="logo">
            <img src={logoUrl} alt="Logo" />
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="hamburger-icon" /> : <FiMenu className="hamburger-icon" />}
          </div>
          <ul>
            {menuItems &&
              menuItems.filter(item => !item.homePage).map((item, index) => (
                <li key={index}>
                  <a>
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="bottom-line"></div>
      </header>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <div className="nav-links-container">
            {menuItems &&
              menuItems.filter(item => !item.homePage).map((item, index) => (
                <a
                  key={index}
                >
                  {item.name}
                </a>
              ))}
          </div>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;