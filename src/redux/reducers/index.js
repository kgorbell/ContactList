import {
    SET_MODAL_CONTENT,
    CLEAR_MODAL_CONTENT,
    UPDATE_CONTACT,
} from "../actionTypes"


const reducer = (state = {}, action) => {
    switch(action.type) {
        case SET_MODAL_CONTENT:
            return {
                ...state,
                modalContent: action.payload,
            }
        case CLEAR_MODAL_CONTENT:
            return {
                ...state,
                modalContent: null,
            }
        case UPDATE_CONTACT:
            const contacts = handleUpdateContact(state.contacts, action.payload)
            return {
                ...state,
                contacts,
            }
        default:
            return state
    }
}

const handleUpdateContact = (array, contact) => {
    let modifiedArray = [ ...array ]
    const selectedIndex = modifiedArray.findIndex((entry) => entry.id === contact.id)
    if (selectedIndex >= 0) modifiedArray[selectedIndex] = contact
    return modifiedArray
}

export default reducer