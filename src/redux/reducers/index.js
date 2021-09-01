import {
    SET_MODAL_CONTENT,
    CLEAR_MODAL_CONTENT,
} from "../actionTypes"


const reducer = (state = {}, action) => {
    switch(action.type) {
        case SET_MODAL_CONTENT:
            console.log("HELLOW", action.payload)
            return {
                ...state,
                modalContent: action.payload,
            }
        case CLEAR_MODAL_CONTENT:
            return {
                ...state,
                modalContent: null,
            }
        default:
            return state
    }
}

export default reducer