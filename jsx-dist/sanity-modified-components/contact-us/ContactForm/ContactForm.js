import React, { useState } from 'react';
import { ContactFormContainer } from './componentStyles';
const ContactForm = ({
  content
}) => {
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "ContactForm: content null");
  const {
    title,
    firstName,
    lastName,
    emailAddress,
    phoneNumber
  } = content;
  if (content == null) return /*#__PURE__*/React.createElement("div", null, "ContactForm: content is null");
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const handleInputChange = event => {
    const {
      name,
      value
    } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    // Handle the submission logic here, sending to an API
    alert("Feature in development");
  };
  return /*#__PURE__*/React.createElement(ContactFormContainer, null, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, !firstName && /*#__PURE__*/React.createElement("label", null, "First name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "firstName",
    value: formState.firstName,
    onChange: handleInputChange
  })), !lastName && /*#__PURE__*/React.createElement("label", null, "Last name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "lastName",
    value: formState.lastName,
    onChange: handleInputChange
  })), !emailAddress && /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: formState.email,
    onChange: handleInputChange
  })), !phoneNumber && /*#__PURE__*/React.createElement("label", null, "Phone number", /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phoneNumber",
    value: formState.phoneNumber,
    onChange: handleInputChange
  })), /*#__PURE__*/React.createElement("label", null, "Message", /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    value: formState.message,
    onChange: handleInputChange
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};
export default ContactForm;