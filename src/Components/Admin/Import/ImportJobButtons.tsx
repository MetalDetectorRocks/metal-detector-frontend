import useCreateImportJobs from '../../../Hooks/Admin/useCreateImportJobs'
import JobButton from '../JobButton'

const ImportJobButtons = () => {
  const { createImportJobs, createCoverDownloadJob } = useCreateImportJobs()

  return (
    <>
      <JobButton
        title={'Create import jobs'}
        okLabelText={'Import'}
        modalContent={
          'Do you really want to create a new import job? All release sources are queried for their new releases. The completion can take several minutes.'
        }
        onStart={() => createImportJobs()}
      />
      <JobButton
        title={'Create retry cover download job'}
        okLabelText={'Retry download'}
        modalContent={
          'Do you really want to retry the cover download? For all releases without a cover, an attempt is made to download the album cover again. The completion can take several minutes.'
        }
        onStart={() => createCoverDownloadJob()}
      />
    </>
  )
}

export default ImportJobButtons
