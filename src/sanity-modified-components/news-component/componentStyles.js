import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  padding: 50px 0;

  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    &::before {
      top: 20px;
      width: 30%;
    }
  }

  @media (max-width: 992px) {
    & h3 {
      font-size: 35px;
      margin-bottom: 20px;
    }
  } 

  @media (min-width: 768px) {
    & h3 {
      font-size: 36px;
    }
  }

  & h3 {
    font-weight: 600;

    margin-bottom: 70px;
    width: 100%;
    color: #242525;
    font-size: 24px;
    line-height: 34px;
    text-align: center;

    font-size: 35px;
    margin-bottom: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 120px;
    left: 0;
    width: 40%;
    height: 60%;
    background-image: -webkit-linear-gradient(40deg, #6b3170 0%, ##ff0a00 100%);
    background-image: -moz- oldlinear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: -o-linear-gradient(40deg, #6b3170 0%, #ff0a00 100%);
    background-image: linear-gradient(50deg, #6b3170 0%, #ff0a00 100%);
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: #242525;
  }
`

export const NewsContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;

  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    & {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }
`

const styles = {
  mainContainer: {
    dots: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'rotate(-90deg) translate(20%, -50%)',
      WebkitTransform: 'rotate(-90deg) translate(20%, -50%)',
      MozTransform: 'rotate(-90deg) translate(20%, -50%)',
      msTransform: 'rotate(-90deg) translate(20%, -50%)',
      Otransform: 'rotate(-90deg) translate(20%, -50%)',
    }
  }
}

export default styles;