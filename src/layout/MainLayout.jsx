// rrd Import
import { Outlet } from "react-router-dom"

// Components 
import Navbar from "../components/Navbar"

function MainLayout() {
  return (
    <>
        {/* Navbar */}

        <Navbar/>
        <main>
            <Outlet/>
        </main>
        {/* Footer */}
    </>
  )
}

export default MainLayout
