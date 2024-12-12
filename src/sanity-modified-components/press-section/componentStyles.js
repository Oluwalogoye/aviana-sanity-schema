import styled from 'styled-components'

export const NewsSection = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: auto;
  /* padding: 20px; */

  position: relative; /* Ensuring NewsSection is positioned */
  z-index: 0; /* Optional: Explicitly setting a z-index */

  padding-top: 80px;

  @media (min-width: 768px) {
    &::before {
      top: 20px;
      width: 30%;
    }
  }

  & .title-search-category-container {
    position: relative; /* Positioning the container */
    z-index: 3; /* Setting a z-index higher than the pseudo-elements */
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 120px;
    left: 0;
    width: 40%;
    height: 60%;
    background-image: -webkit-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -moz- oldlinear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -o-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: linear-gradient(50deg, #6b3170 0%, #ff0a00 100%);
  }

  & .dots {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(-90deg) translate(20%, -50%);
    -moz-transform: rotate(-90deg) translate(20%, -50%);
    -ms-transform: rotate(-90deg) translate(20%, -50%);
    -o-transform: rotate(-90deg) translate(20%, -50%);
    transform: rotate(-90deg) translate(20%, -50%);
  }

  /* & .pageNewsTitle h1 {
    margin-bottom: 15px;
    color: #f4f4f4;
  } */

  & h1 {
    /* margin-bottom: 15px;
    color: #f4f4f4;

    text-align: center; */
    margin-top: 50px;
    /* margin-bottom: 15px; */
    color: #f4f4f4;
    text-align: center;
    height: 100px;


  }

  /* New Div Container for Search Bar and Category Filter */
  & .controls-container {
    display: flex;
    justify-content: center; /* Center the container */
    margin: 20px 0; /* Add some margin for spacing */

    padding: 20px 0px;
  }

  /* Styles for Seach Bar and Category Filter inside the Container */
  & .search-bar,
  & .category-filter {
    margin: 0 10px; /* Add some space between them */
    /* Add any other necessary styles */
  }

  & .search-bar input {
    min-width: 200px;
    /* width: 100%; */
    padding: 15px 20px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #242525;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    /* padding: 15px 20px; */
  }

  & .search-bar button {
    /* position: absolute; */
    /* right: 10px; */
    /* min-width: 300px; */
    /* width: 100%; */
    padding: 15px 20px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #242525;
    /* webkit-appearance: none; */
    -moz-appearance: none;
    /* appearance: none; */
    background: #fff;
    /* padding: 15px 20px; */
    /* position: absolute; */
    /* top: 12px; */
    /* right: 10px; */
    /* background: none; */
    /* border: none; */
    /* font-size: 18px; */
    color: #ff0a00;

    cursor: pointer;


  }

  & .category-filter select {
    min-width: 200px;
    /* width: 100%; */
    padding: 15px 20px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #242525;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    /* padding: 15px 20px; */

  }

  /* Ensure the elements inside the container are flex items */
  & .search-bar input[type="text"],
  & .search-bar button,
  & .category-filter select {
    /* Add styles to input, button, and select elements */
  }
    
  /* .pageNewsTitle {
    height: 200px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #242525;
    font-size: 24px;
    font-weight: 100;
    background: #f4f4f4;
  } 

  @media (min-width: 1200px) {
    .pageNewsTitle {
      background: #242525;
      color: #f4f4f4;
    }
  } */

  .news-container {
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;

    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .news-container {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      /* justify-content: space-between; */
      justify-content: normal;

    }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 225px;
    background-color: #242525;
  }
`