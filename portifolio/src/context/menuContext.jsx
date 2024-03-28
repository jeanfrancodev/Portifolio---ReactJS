import { createContext, useContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const contextValue = { isActive, setIsActive }

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}
export function menuDropDown() {
  const context = useContext(MenuContext)

  return context
}
