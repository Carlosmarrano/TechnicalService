import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TechnicalServiceRoutes } from "../TechnicalService/routes/TechnicalServiceRoutes"
import { ChekingAuth } from "../ui/components/checkingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {


    const status = useCheckAuth();

    if( status === 'checking') {
        return <ChekingAuth />
    }

    return(
    <Routes>

        {
            (status === "authenticated")
            ? <Route path="/*"  element={ <TechnicalServiceRoutes /> }/>
            : <Route path="/auth/*" element={ <AuthRoutes />  }/>
        }

        <Route path="*" element={<Navigate to={status === "authenticated" ? "/" : "/auth/login"} />} />
        
        {/**Login & Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes />  }/> */}

        {/**TechnicalService Page */}
        {/* <Route path="/*"  element={ <TechnicalServiceRoutes /> }/> */}

    </Routes>
    )
}