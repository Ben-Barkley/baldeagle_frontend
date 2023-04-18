import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./reducers/InvoiceReducer";
import userReducer from "./reducers/userReducer";
import notificationReducer from "./reducers/notificationReducer";


const store = configureStore({
    reducer: {
        invoice: InvoiceReducer,
        user: userReducer,
        notification: notificationReducer
    }
})

export default store