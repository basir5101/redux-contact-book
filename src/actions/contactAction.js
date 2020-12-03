import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../CONST/const"

//actions
export const addContact = (contact) =>({
        type: CREATE_CONTACT,
        payload: contact,
    })

//GET CONTACT
export const getContact = id =>({
    type: GET_CONTACT,
    payload: id,
})

// UPDATE A CONTACT 
export const updateContact = contact =>({
    type: UPDATE_CONTACT,
    payload: contact,
})

//delete contact
export const deleteContact = id =>({
    type: DELETE_CONTACT,
    payload: id,
})

//select all content
export const selectAllContact = id =>({
    type: SELECT_CONTACT,
    payload: id,
})

// clear all contact 
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})

// delete all selected contact
 
export const deleteAllContact = () =>({
    type: DELETE_SELECTED_CONTACT,
})