import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"

 const App = () => {
    return(<div>
        <Header></Header>
        <Body></Body>
    </div>)
 }  

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>
        
        
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }
 ])




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)
