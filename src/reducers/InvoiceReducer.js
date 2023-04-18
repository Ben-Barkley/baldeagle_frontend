import { createSlice } from "@reduxjs/toolkit";
import { InvoiceService } from "../services/invoice";

const initialState = []

const invoiceSlice = createSlice({
    name: 'paymentVouchers',
    initialState,
    reducers: {
        setInvoices(state, action) {
            return state = action.payload
        },
        appendInvoice(state, action) {
            state.push(action.payload)
        }
    }
})

export const { setInvoices, appendInvoice } = invoiceSlice.actions

export const addNewAnecdote = (content) => {
    return async dispatch => {
      const response = await InvoiceService.createNew(content)
      dispatch(appendInvoice(response))
    }
  }

export default invoiceSlice.reducer