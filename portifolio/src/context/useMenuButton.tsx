import { useEffect, useState } from 'react'

export const useMenuClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const onClick = e => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
      if (isActive) {
      }
    }
  }, [])

  return [isActive, setIsActive]
}
