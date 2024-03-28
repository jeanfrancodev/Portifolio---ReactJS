import { createContext, useContext, useEffect, useState } from 'react'

const ProfileContext = createContext({})

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState()
  useEffect(() => {
    try {
      fetch('profile.json', {
        headers: {
          Accept: 'application/json'
        }
      })
        .then(res => res.json())
        .then(async res => {
          setProfile(res.profile)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <ProfileContext.Provider value={{ profile }}>
        {children}
      </ProfileContext.Provider>
    </>
  )
}
export function useProfile() {
  const context = useContext(ProfileContext)

  return context
}
