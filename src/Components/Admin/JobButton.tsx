import Button from '@mui/material/Button'
import { useState } from 'react'
import OkCancelDialog from '../Common/Dialog/OkCancelDialog'

export type JobButtonProps = {
  title: string
  okLabelText: string
  modalContent: string
  onStart: () => void
}

const JobButton = (props: JobButtonProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const startJob = () => {
    props.onStart()
    closeModal()
  }

  return (
    <>
      <Button variant="outlined" onClick={() => openModal()}>
        {props.title}
      </Button>
      <OkCancelDialog
        open={modalIsOpen}
        title={props.title}
        content={props.modalContent}
        onOk={() => startJob()}
        onCancel={() => closeModal()}
        onClose={() => closeModal()}
        okLabel={props.okLabelText}
        okColor={'success'}
      />
    </>
  )
}

export default JobButton
