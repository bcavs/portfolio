import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import './ContactModal.scss';

import { ContactFormContext } from "../../context"

const ContactModal = (props) => {
  console.log("Props: ", props)
  const { contactFormIsOpen, closeContactForm } = useContext(ContactFormContext)
  return(
    <div className={`contact-modal contact-modal--${ contactFormIsOpen ? "open" : "closed" }`} >
      <div className="contact-modal__form-container">
        Contact Modal
        <button onClick={() => closeContactForm()}>CLose</button>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="contact-modal__form">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
};

ContactModal.propTypes = {
  // bla: PropTypes.string,
};

ContactModal.defaultProps = {
  // bla: 'test',
};

export default ContactModal;
