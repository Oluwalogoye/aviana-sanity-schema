import styled from 'styled-components'

export const ContactFormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  /* background: #f9f9f9; */
  border-radius: 8px;

  & h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  & form {
    display: flex;
    flex-direction: column;
  }

  & label {
    margin-bottom: 10px;
  }

  & button {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    line-height: 12px;
    position: relative;
    text-align: center;
    transition: all .15s linear;
    background-color: #ff7a59;
    border-color: #ff7a59;
    color: #fff;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    padding: 12px 24px;
    max-width: 125px;
  }

  & button::hover {
    background-color: rgb(255, 132, 106);
  }
  & input[type="text"],
  & input[type="email"],
  & input[type="tel"],
  & textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`

const styles = {
  // inputTypeTextEmailTelAndTextArea: {
  //   width: '100%',
  //   padding: '10px',
  //   marginBottom: '20px',
  //   border: '1px solid #ddd',
  //   borderRadius: '4px',
  // },

  // inputTypeText: Object.assign({},
  //   styles.inputTypeTextEmailTelAndTextArea,
  // ),

  // inputTypeEmail: Object.assign({}, 
  //   styles.inputTypeTextEmailTelAndTextArea,
  // ),

  // inputTypeTel: Object.assign({},
  //   styles.inputTypeTextEmailTelAndTextArea,
  // )
}



export default styles;