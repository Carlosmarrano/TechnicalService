import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TechnicalServiceRoutes } from "../TechnicalService/routes/TechnicalServiceRoutes"

export const AppRouter = () => {

    return(
    <Routes>
        
        {/**Login & Registro */}
        <Route path="/auth/*" element={ <AuthRoutes />  }/>

        {/**TechnicalService Page */}
        <Route path="/*"  element={ <TechnicalServiceRoutes /> }/>

    </Routes>
    )
}