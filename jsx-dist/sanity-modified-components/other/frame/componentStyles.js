import styled from 'styled-components';
export const FrameContainer = styled.div`
  position: relative;
  padding: 50px 0;

  background: linear-gradient(rgb(240, 242, 246), rgb(187, 217, 236));
`;

// Styled components for media queries
export const ImagesContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;
  position: relative;
  z-index: 2;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-betweem;

  @media (min-width: 768px) {
    & {
      display: flex;
      flexWrap: wrap;
      justify-content: space-between;
    }

  }

  & img {
    box-sizing: border-box;
    width: 100%;
    object-fit: contain;
    height: auto;
  }

`;
export const ImageWrapper = styled.div`

  @media (min-width: 768px) {
    & {
      width: calc(33% - 20px);
      margin: 10px;
    }
  }

  & h2 {
    font-size: 1.5em;
    margin-top: 0.5em;

    color: #771800;
  }

  & p {
    font-size: 0.9em;
    font-weight: 700!important;
  }



`;