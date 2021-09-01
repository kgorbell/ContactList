import { createStore } from "redux";
import reducer from "./reducers";

export default createStore(reducer, { 
    contacts: [
        {
            first: "Anne",
            last: "Brown",
            phone: "345-678-9123",
            email: "jane_doe@email.com"
        },
        {
            first: "Jane",
            last: "Doe",
            phone: "123-456-7891",
            email: "jane_doe@email.com"
        },
        {
            first: "Fred",
            last: "Ellis",
            phone: "234-567-8912",
            email: "fredellis@email.com"
        },
        {
            first: "Juan",
            last: "Rodriguez",
            phone: "567-891-2345",
            email: "jane_doe@email.com"
        },
        {
            first: "Austin",
            last: "Smith",
            phone: "456-789-1234",
            email: "jane_doe@email.com"
        },
    ],
})