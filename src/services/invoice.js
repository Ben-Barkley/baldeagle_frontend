import axios from 'axios'
const baseUrl = 'http://142.4.6.101:32768/api/payment-voucher'

let token = null
export const setToken = (newtoken) => {
  token = `Bearer ${newtoken}`
}

const createNew = async (obj) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = axios.post(baseUrl, obj, config)
    return response.data
}

const getAllByInitiator = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            initiator: email
        }
    }
  const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
  return response.data
}

const getAllByReviwer = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            reviewer: email
        }
    }
    const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
      return response.data
}

const getAllByApprover = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            approver: email
        }
    }
    const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
    return response.data
}

const updateInvoiceState = async (obj, id) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.put(`${baseUrl}/${id}`, obj, config)
    return response.data
}

export const InvoiceService = { getAllByInitiator, getAllByApprover, getAllByReviwer, createNew, updateInvoiceState, setToken }
