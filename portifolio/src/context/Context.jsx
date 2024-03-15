import { createContext, useContext } from 'react'

const ThemeContext = createContext(null);

const Context = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <ThemeContext.Provider></ThemeContext.Provider>
    </>
  )
}
export default Context
