import styled from 'styled-components';
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &::hover {
    background-color: #0056b3;
  }
`;
const styles = {
  enhancedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box'
  },
  enhancedCtaHeader: {
    color: 'white',
    marginBottom: '10px'
  },
  headersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  headerWrapper: {
    flex: '1 1 33%',
    boxSizing: 'border-box',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px'
  },
  img: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    marginBottom: '10px'
  }
};
export default styles;