import { useState } from 'react'
import Button from '@mui/material/Button'
import OkCancelDialog from '../../Common/Dialog/OkCancelDialog'
import useCreateImportJobs from '../../../Hooks/Admin/useCreateImportJobs'

const ImportButtons = () => {
  const [importModalIsOpen, setImportModalIsOpen] = useState(false)
  const [coverModalIsOpen, setCoverModalIsOpen] = useState(false)
  const { createImportJobs, createCoverDownloadJob } = useCreateImportJobs()

  const openImportModal = () => {
    setImportModalIsOpen(true)
  }

  const closeImportModal = () => {
    setImportModalIsOpen(false)
  }

  const openCoverModal = () => {
    setCoverModalIsOpen(true)
  }

  const closeCoverModal = () => {
    setCoverModalIsOpen(false)
  }

  const onCreateImportJobs = () => {
    createImportJobs()
    closeImportModal()
  }

  const onCreateCoverDownloadJob = () => {
    createCoverDownloadJob()
    closeImportModal()
  }

  return (
    <>
      <Button variant="outlined" onClick={() => openImportModal()}>
        Create import jobs
      </Button>
      <Button variant="outlined" onClick={() => openCoverModal()}>
        Create retry cover download job
      </Button>
      <OkCancelDialog
        open={importModalIsOpen}
        title={'Create import jobs'}
        content={
          'Do you really want to create a new import job? All release sources are queried for their new releases. The completion can take several minutes.'
        }
        onOk={() => onCreateImportJobs()}
        onCancel={() => closeImportModal()}
        onClose={() => closeImportModal()}
        okLabel={'Import'}
        okColor={'success'}
      />
      <OkCancelDialog
        open={coverModalIsOpen}
        title={'Create retry cover download job'}
        content={
          'Do you really want to retry the cover download? For all releases without a cover, an attempt is made to download the album cover again. The completion can take several minutes.'
        }
        onOk={() => onCreateCoverDownloadJob()}
        onCancel={() => closeCoverModal()}
        onClose={() => closeCoverModal()}
        okLabel={'Retry download'}
        okColor={'success'}
      />
    </>
  )
}

export default ImportButtons
