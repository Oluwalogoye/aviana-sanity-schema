import React, { useState } from "react"
import { NewsSection } from './componentStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fontawesome/free-solid-svg-icons';
import CardComponent from '../news-component/NewsCard/CardComponent'
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const PressSection = ({content}) => {
  console.log("Press Section content", content);

  const { title, pressReleases, decorativeImage } = content;
  // State to hold the current input in the search field
  const [searchInput, setSearchInput] = useState('');
  
  const sermonsData = pressReleases;
  
  // State to hold the filtered sermon data
  const [filteredSermons, setFilteredSermons] = useState([...pressReleases.reverse()]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSearchClick = () => {
    setFilteredSermons(sermonsData.filter(sermon => 
      sermon.title.toLowerCase().includes(searchInput.toLowerCase())
    ).reverse());
  };
  
  const handleButtonClick = (pageTitle) => {
    console.log("pageTitle", pageTitle);

    const pathTitle = encodeURIComponent(pageTitle.replace(/[\s.,]+/g, '-'));
    return () => {
      alert(`User will be navigated to /${title.toLowerCase()}/${pathTitle}`);
    };
  };

  return (
    <NewsSection>
      <div className="title-search-category-container">
        <h1>{title}</h1>
        <div className="controls-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearchLocation} />
              {/* <FontAwesomeIcon icon={'search'} /> */}
            </button>
          </div>
          <div className="category-filter">
            <select>
              <option value="">Filter by Category</option>
              {/* Categories options would go here */}  
            </select>  
          </div>  
        </div>
      </div>
      <div className="news-container">
        <img src={decorativeImage?.asset?.url} alt="Decorative Image" className="dots" />
        {filteredSermons && filteredSermons.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            imageSrc={item.image}
            caption={item.shortDescription}
            buttonText="READ MORE"
            onClick={handleButtonClick(item.title)} // Change buttonLink to onClick
          />
        ))}
      </div>
    </NewsSection>
  )
};

export default PressSection;