import {
    SET_MODAL_CONTENT,
    CLEAR_MODAL_CONTENT,
    UPDATE_CONTACT,
    CREATE_CONTACT,
} from '../actionTypes';


export const setModalContent = (content) => ({
    type: SET_MODAL_CONTENT,
    payload: content,
})

export const clearModalContent = () => ({
    type: CLEAR_MODAL_CONTENT,
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})

export const createContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
})