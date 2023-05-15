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
        },
        updateInvoice(state, action) {
          const removedItem = state.filter(item => item.id !== action.payload.id)
          console.log(removedItem)
          return state = [...removedItem, action.payload]
        }
    }
})

export const { setInvoices, appendInvoice, updateInvoice } = invoiceSlice.actions

export const addNewInvoice = (content) => {
    return async dispatch => {
      const response = await InvoiceService.createNew(content)
      dispatch(appendInvoice(response))
    }
  }

  export const initiateInvolvedInvoices = (email) => {
    return async dispatch => {
      const response = await InvoiceService.getAllInvolvingUser(email)
      dispatch(setInvoices(response))
    }
  }

  export const updateAsyncInvoice = (meta, id) => {
    return async dispatch => {
      console.log("update async called")
      const response = await InvoiceService.updateInvoiceState(meta, id)
      console.log(response)
      dispatch(updateInvoice(response))
    }
  }


export default invoiceSlice.reducer