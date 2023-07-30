import { useEffect } from 'react'

export const LandingPage = () => {
  useEffect(() => {
    document.title = 'Home | Metal Detector'
  }, [])
  const [searchText, setSearchText] = useState('')
  const filteredUsers = data.filter(
    (user: User) =>
      (user.username && user.username.toLowerCase().includes(searchText.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchText.toLowerCase())),
  )

  return (
    <>
      <h1>Home</h1>
    </>
  )
}
