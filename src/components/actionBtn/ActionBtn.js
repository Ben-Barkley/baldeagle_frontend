import React, { useState } from "react";
import "./style.css";
import { Button } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { InvoiceService } from "../../services/invoice";
import { updateAsyncInvoice } from "../../reducers/InvoiceReducer";
import { useDispatch } from "react-redux";

const ActionBtn = ({action, invoice}) => {

  const dispatch = useDispatch()

  const [actionLoading, setActionLoading] = useState()
  const [rejectLoading, setRejectLoading] = useState()

  const handleAction = async () => {
    if(action === "Review") {
      setActionLoading(true)
      const updatedInvoice = {...invoice.meta, status: "REVIEWED", reviewDate: Date.now().toLocaleString}
      console.log(updatedInvoice)
      dispatch(updateAsyncInvoice(updatedInvoice, invoice.id))
      setActionLoading(false)
    } else if(action === "Approve") {
      setActionLoading(true)
      const updatedInvoice = {...invoice.meta, status: "APPROVED" , approvalDate: Date.now().toLocaleString}
      const res = await InvoiceService.updateInvoiceState(updatedInvoice, invoice.id)
      console.log(res)
      setActionLoading(false)
    }
  }

  const handleReject = async () => {
    if(action === "Review") {
      setRejectLoading(true)
      const updatedInvoice = {...invoice.meta, status: "RE_REJECT"}
      const res = await InvoiceService.updateInvoiceState(updatedInvoice, invoice.id)
      console.log(res)
      setRejectLoading(false)
    } else if(action === "Approve") {
      setRejectLoading(true)
      const updatedInvoice = {...invoice.meta, status: "AP_REJECT"}
      const res = await InvoiceService.updateInvoiceState(updatedInvoice, invoice.id)
      console.log(res)
      setRejectLoading(false)

    }
  }

  const [open, setOpen] = useState(false)
  return (
    <div className="btn-wrapper">
      <Button type="primary" onClick={() => setOpen(!open)} icon={open ? <CloseOutlined /> : null}>{!open ? `Click here to ${action}` : "Close"}</Button>
      <div className={open ? "actions open" : "actions"} >
        <Button shape="round" loading={actionLoading} onClick={handleAction}>{action}</Button>
        <Button shape="round" loading={rejectLoading} onClick={handleReject}>Reject</Button>
      </div>
    </div>
  );
};

export default ActionBtn;
