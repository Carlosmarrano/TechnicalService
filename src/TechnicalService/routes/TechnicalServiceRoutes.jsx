import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homePage"
import { ServicesPage } from "../pages/servicePage"
import { AboutPage } from "../pages/aboutPage"
import { ContactPage } from "../pages/contactPage"


export const TechnicalServiceRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/service" element={ <ServicesPage/>} />
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/contact" element={ <ContactPage/>} />
            {/**404 Page not found */}
            
            <Route path="/*" element={ <Navigate to="/" /> }/>
        </Routes>
    )
}