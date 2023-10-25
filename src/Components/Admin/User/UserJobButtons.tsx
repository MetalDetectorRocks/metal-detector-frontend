import Button from '@mui/material/Button'
import useCreateUserJobs from '../../../Hooks/Admin/useCreateUserJobs'
import JobButton from '../JobButton'
import { useState } from 'react'
import CreateAdministratorDialog from './CreateAdministratorDialog'

const UserJobButtons = () => {
  const { cleanupRegistration } = useCreateUserJobs()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <Button variant="outlined" onClick={() => openModal()}>
        Create Administrator
      </Button>
      <CreateAdministratorDialog isOpen={modalIsOpen} close={() => closeModal()} />

      <JobButton
        title={'Cleanup registration'}
        okLabelText={'Run cleanup'}
        modalContent={'Do you want to remove expired users?'}
        onStart={() => cleanupRegistration()}
      />
    </>
  )
}

export default UserJobButtons
