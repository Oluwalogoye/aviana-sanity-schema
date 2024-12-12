import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ffcd00;
  border-radius: 4px;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  background-color: #ffcd00;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: rgb(255, 154, 0);
    transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    left: 0;
    right: 0;
  }

  span {
    position: relative;
    z-index: 1;
  } 
`

const styles = {
  rollinsContainer: {
    // .rollins-container 
    minHeight: '80vh', 
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Arial', sans-serif",
    color: 'white',
    overflow: 'auto',
    padding: '80px 50px',
  },
  logo: {
    marginTop: '10px',
    width: '200px',
    marginBottom: '10px',
  },
  logoHidden: {
    opacity: 0,
    visibility: 'hidden'
  },
  title: {
    textShadow: '#008609 1px 0px 10px',
    color: 'white',
    fontSize: '44px',
  },
  description: {
    textShadow: '#008609 1px 0 10px',
    color: 'white',
    fontSize: '25px',
    fontWeight: '600',
    width: '100%',
  },
};

export default styles;