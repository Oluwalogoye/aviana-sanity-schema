import styled from 'styled-components'

const styles = {
  // profileH1H2: {
  //   color: '#333',
  //   textAlign: 'center',
  // },
  // profile: {
  //   display: 'flex',
  //   alignItems: 'flex-start',
  //   padding: '20px',
  //   paddingTop: '100px',
  // },
  // profileH1: Object.assign({},
  //   styles.profileH1H2,
  // ),
  // profileH2: Object.assign({},
  //   styles.profileH1H2,
  // ),
  // profileP: {
  //   textAlign: 'justify',
  //   color: 'rgb(102, 102, 102)',
  //   lineHeight: 1.6,
  // },
  // profileContent: {
  //   flex: 1,
  //   backgroundColor: '#f8f8f8',
  //   padding: '20px',
  //   borderRadius: '8px',
  //   boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  // }
}

export const ProfileImage = styled.div`
  & img {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 8px;
  }
`

export const LeaderProfile = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;

  padding-top: 100px;

  .profile-content {
    flex: 1;
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  & h1, & h2 {
    color: #333;
  }

  & p {
    text-align: justify;
    color: rgb(102, 102, 102);
    line-height: 1.6;
  }


  & h1, & h2 {
    text-align: center;
  }

  & p {
    text-align: justify;
    line-height: 1.6;
  }
`

export default styles;