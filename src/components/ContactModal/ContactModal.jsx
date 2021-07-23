import { Button, Modal, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';

import { ContactFormContext } from "../../context"
import SendIcon from '@material-ui/icons/Send';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactModal = (props) => {
  const { contactFormIsOpen, closeContactForm } = useContext(ContactFormContext);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  return(
    <StyledModal open={contactFormIsOpen} onClose={closeContactForm}>
      <FormContainer>
        <FormTop>
          <FormHeadline>Get in touch</FormHeadline>
          <Button onClick={() => closeContactForm()}>CLose</Button>  
        </FormTop>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if(!values.name) {
              errors.name = "What's your name?"
            }
            if(!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Please enter a valid email'
            }
            if(!values.message) {
              errors.message = "You're going to need to say something..."
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-form", ...values })
            })
            .then(() => {
              console.log('Success: ', values);
              actions.resetForm()
            })
            .catch(() => {
              alert('Error');
            })
            .finally(() => actions.setSubmitting(false))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
          }) => (
            <StyledForm 
              name="contact-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            > 
              {/* Hidden field needed for Netlify to recognize the form */}
              <input type="hidden" name="form-name" value="contact-form" />
              <InputContainer>
                <StyledTextField 
                  error={touched.name && errors.name}
                  helperText={touched.name && errors.name && errors.name}
                  value={values.name} 
                  onChange={handleChange}
                  variant="outlined" 
                  name="name" 
                  label="Name" 
                 />
              </InputContainer>  
              <InputContainer>
                <StyledTextField 
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email && errors.email}
                  value={values.email} 
                  onChange={handleChange}
                  variant="outlined" 
                  name="email" 
                  label="Email"
                  />
              </InputContainer>  
              <InputContainer>
                <StyledTextField 
                  error={touched.message && errors.message}
                  helperText={touched.message && errors.message && errors.message}
                  value={values.message} 
                  onChange={handleChange}
                  variant="outlined" 
                  name="message" 
                  label="Message" 
                  minRows={4} 
                  multiline
                />
              </InputContainer>  
              <StyledButton color="primary" variant="contained" endIcon={<SendIcon/>} type="submit">Send</StyledButton>
            </StyledForm>
          )}
        </Formik>
      </FormContainer>
    </StyledModal>
  )
};

ContactModal.propTypes = {
  // bla: PropTypes.string,
};

ContactModal.defaultProps = {
  // bla: 'test',
};

export default ContactModal;


const StyledModal = styled(Modal)`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  width: clamp(300px, 75%, 650px);
  padding: 20px;
  min-height: 250px;
  background-color: white;
  margin: 0 auto;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const FormHeadline = styled.h2`
  font-size: 34px;
  font-weight:bold;
`;
const FormTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const InputContainer = styled.div`
  width:100%;
  margin:10px 0;
`;
const StyledTextField = styled(TextField)`
  width:100%;
  /* input{padding: 15px 10px;} */
`;
const StyledButton = styled(Button)`
  background-color: green;
`;