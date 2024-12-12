import styled from 'styled-components'

export const LymeContainer = styled.div`
  padding-top: 80px;
  padding-left: 50px;
  padding-right: 50px;

  .lyme-header {
    color: #fa3200; 
    margin-bottom: 10px
  }

  .lyme-content {
    color: #333;
    line-height: 1.6;
    /* padding: 10px; */
  }

  .bold {
    font-weight: bold;
  }

  .lyme-link {
    color: #337ab7;
    text-decoration: none;
  }

  .lyme-link:hover {
    text-decoration: underline;
  }

  .lyme-images-container, .covid-images-container {
    padding: 0 20px;
    margin: auto;
    position: relative;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .lyme-images-container {
    max-width: 800px;
  }

  .covid-images-container {
    max-width: 400px;
  }

  .lyme-images-container .img, .covid-images-container .img {
    box-sizing: border-box;
    width: 100%; 
    object-fit: contain;
    height: auto;
    padding: 10px;
  }

  @media (min-width: 576px) {
    & .lyme-images-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    & .lyme-images-container .img {
      width: calc(50% - 20px) !important;
      margin: 10px;
    }
  }
`

export const CovidContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`

