import React, { createContext, useState } from "react";

const defaultState = {
    contactFormIsOpen: false,
    openContactForm: () => {},
    closeContactForm: () => {}
}

export const Context = createContext(defaultState)

export const Provider = props => {
    const { children } = props;
    const [ contactFormIsOpen, setContactFormIsOpen ] = useState(false)

    const closeContactForm = () => { setContactFormIsOpen(false) }
    const openContactForm = () => { console.log("openni"); setContactFormIsOpen(true) }
    
    const contactFormContext = { contactFormIsOpen, closeContactForm, openContactForm }

    return <Context.Provider value={contactFormContext}>{children}</Context.Provider>
}

export const { Consumer } = Context