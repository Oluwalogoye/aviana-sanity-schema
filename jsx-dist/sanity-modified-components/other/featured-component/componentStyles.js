import styled from 'styled-components';
export const FeaturedLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 0;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;

  & h2 {
    /* margin-bottom: 20px; */

    font-size: 36px;
    margin-bottom: 30px;
    width: 100%;
    color: #242525;
    /* font-size: 24px; */
    font-weight: 400;
    line-height: 34px;
    text-align: center;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .logos a {
    display: block;
  }

  .logos img {
    /* Set a standard height for your images if they are of different sizes */
    /* height: 50px; */
    height: 100px;
    margin: 20px;
    max-width: 100%;

    /* Add additional styles such as border, radius, etc. */
  }
`;