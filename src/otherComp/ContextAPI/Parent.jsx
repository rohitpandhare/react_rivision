import { useState } from "react"
import { Child } from "./Child"
import { ThemeContext } from "../ThemeContext"

export function Parent() {
    const [theme, setTheme] = useState('light')

  return (
    <div>
      {/* wrapping child inside the ThemeContext.Provider */}
      
      {/* //we are not passing value to child directly -- we are passing to ThemeContext */}
      <ThemeContext.Provider value={theme}>
      <Child />

      </ThemeContext.Provider>
    </div>
    
  )
}