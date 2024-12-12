import styled from 'styled-components';
export const FirstItem = styled.div`
  padding-top: 0px;
`;
export const LymeLink = styled.div`
  color: #337ab7;
  text-decoration: none;

  &::hover {
    text-decoration: underline;
  }
`;

// combined selector
const LymeContainerLymeImagesContainer = styled.div`
  /* Other style for LymeImagesContainer */

  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const LymeContainer = LymeContainerLymeImagesContainer;
export const LymeImagesContainer = LymeContainerLymeImagesContainer;
export const LymeContainerImg = styled.img`
  /* Other styles for images within LymeContainer */

  @media (min-width: 576px) {
    width: calc(50% - 20px);
    margin: 10px;
  }
`;
const styles = {
  lymeContainerCovidContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "80px"
  },
  lymeContainer: Object.assign({}, {
    paddingTop: "80px"
  }, styles.lymeContainerCovidContainer),
  covidContainer: Object.assign({}, styles.lymeContainerCovidContainer),
  lymeHeader: {
    color: "#008609",
    marginBottom: "10px"
  },
  lymeContent: {
    color: '#333',
    lineHeight: 1.6
  },
  bold: {
    fontWeight: 'bold'
  },
  // Combined selector
  lymeImagesContainerCovidImagesContainer: {
    padding: '0 20px',
    margin: 'auto',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  // Combined selector
  lymeImagesContainerImgCovidImagesContainerImg: {
    boxSizing: 'border-box',
    width: '100%',
    objectFit: 'contain',
    height: 'auto',
    padding: '10px'
  },
  lymeImagesContainer: Object.assign({}, {
    maxWidth: '800px',
    img: styles.lymeImagesContainerImgCovidImagesContainerImg
  }, styles.lymeImagesContainerCovidImagesContainer),
  covidImagesContainer: Object.assign({}, {
    maxWidth: '40px',
    img: styles.lymeImagesContainerImgCovidImagesContainerImg
  }, styles.lymeImagesContainerCovidImagesContainer)
};
export default styles;