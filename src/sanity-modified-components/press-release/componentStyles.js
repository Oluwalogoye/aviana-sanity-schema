import styled from 'styled-components'

export const PressReleaseContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 80px;

  & h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 15px;
  }

  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  & p {
    color: #666;
    line-height: 1.6;
  }
`

const styles = {
  noPressRelease: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '18px',
    color: '#999',
  }
}

export default styles;