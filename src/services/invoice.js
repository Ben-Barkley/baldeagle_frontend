import axios from 'axios'
import { redirect } from 'react-router-dom'

const baseUrl = 'http://localhost:8080/api/payment-voucher'

let token = null
export const setToken = (newtoken) => {
  token = `Bearer ${newtoken}`
}

const revokeLogin = () => {
    window.localStorage.removeItem('baldeagleUser')
    redirect("/login")
}

const createNew = async (obj) => {
    const config = {
        headers: { Authorization: token },
    }
    try {
        const response = await axios.post(baseUrl, obj, config)
        return response.data
    } catch (error) {
        console.log('error caught', error)
        revokeLogin()
    } 
}

const getAllByInitiator = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            initiator: email
        }
    }
    try {
        const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
        return response.data
    } catch (error) {
        revokeLogin()
    }
}

const getAllByAuthorizer = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            authorizer: email
        }
    }
    try {
        const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
        return response.data
    } catch (error) {
      revokeLogin()  
    }

}

const getAllInvolvingUser = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            authorizer: email,
            initiator: email,
            approver: email

        }
    }
    try {
        const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
        return response.data
    } catch (error) {
      revokeLogin()  
    }

}
    

const getAllByApprover = async (email) => {
    const config = {
        headers: { Authorization: token },
        params: {
            approver: email
        }
    }
    try {
        const response =  await axios.get(`${baseUrl}/get-vouchers`, config)
        return response.data
    } catch (error) {
        revokeLogin()
    }
    
}

const updateInvoiceState = async (obj, id) => {
    const config = {
        headers: { Authorization: token },
    }
    try {
        const response = await axios.put(`${baseUrl}/${id}`, obj, config)
        return response.data
    } catch (error) {
        revokeLogin()
    }
    
}

export const InvoiceService = { getAllByInitiator, getAllByApprover, getAllByAuthorizer, getAllInvolvingUser, createNew, updateInvoiceState, setToken }