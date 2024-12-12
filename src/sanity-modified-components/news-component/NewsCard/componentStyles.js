import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fdfdfd;
  margin: 20px 10px;
  box-sizing: border-box;

  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    & {
      width: calc(33% - 20px);
    }
  }
`

export const LymeLink = styled.a`
  color: #337ab7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const styles = {
  cardImage: {
    width: '100%',
    objectFit: 'cover', // Keeps the aspect ratio of the image
  },
  cardContent: {
    padding: '16px',
    // background: white,
  },
  cardTitle: {
    margin: 0,
    color: '#333',
    fontSize: '24px',
  },
  cardCaption:  {
    color: '#666',
  },
  cardButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 600,
    color: '#434343',
    cursor: 'pointer',
  },
  clickButton: {
    cursor: 'pointer',
  },
  lymeLink: `color: #337ab7;
    text-decoration: none`
  
};

export default styles;