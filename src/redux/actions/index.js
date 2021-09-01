import {
    SET_MODAL_CONTENT,
    CLEAR_MODAL_CONTENT,
} from '../actionTypes';


export const setModalContent = (content) => ({
    type: SET_MODAL_CONTENT,
    payload: content,
})

export const clearModalContent = () => ({
    type: CLEAR_MODAL_CONTENT,
})