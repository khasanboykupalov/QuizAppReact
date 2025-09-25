// rrd import 
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Layout
import MainLayout from "./layout/MainLayout"
// Pages
import Error from "./pages/Error"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

function App() {

const routes = createBrowserRouter ([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement: <Error/>,
    children:[
      {index:true,
        element:<Home/>
      },
      {
        path:"/quiz/:title",
        element:<Quiz/>
      }

    ]
  },
])

  return <RouterProvider router={routes} />
  
}

export default App
