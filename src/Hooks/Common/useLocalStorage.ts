import { useEffect, useState } from 'react'

export type UseLocalStorageProps = {
  key: string
  initialValue: string
}

const useLocalStorage = (props: UseLocalStorageProps) => {
  const item = localStorage.getItem(props.key)
  const [value, setValue] = useState<string>(item ? JSON.parse(item) : props.initialValue)

  useEffect(() => {
    localStorage.setItem(props.key, JSON.stringify(value))
  }, [props.key, value])

  return [value, setValue]
}

export default useLocalStorage
