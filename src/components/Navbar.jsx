import { useState, useEffect } from "react"

const modeFromLocalStorage = () => {
  return localStorage.getItem("darkMode") || "light"
}

function Navbar() {

    const [theme, setTheme] = useState(modeFromLocalStorage)
    //theme toggle function
    const handleThemeToggle = () => { 
      const newTheme = theme == 'dark-mode' ? 'light' : 'dark-mode'
      setTheme(newTheme)
    }

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(theme)

    localStorage.setItem('darkMode', theme)
  }, [theme])




  return (
    <header className="header">
      <div className="header-container container">
        <div>1</div>
        <div>
          <div className="dark-btn" onClick={handleThemeToggle}>
            <input type="checkbox" checked = {theme == "dark-mode"} readOnly/>
            <span>
              <span></span>
              <span></span>
            </span>
          </div>   
        </div>
      </div>
    </header>
  )
}

export default Navbar
