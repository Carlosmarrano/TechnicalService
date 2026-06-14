import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TechnicalServiceRoutes } from "../TechnicalService/routes/TechnicalServiceRoutes"
import { ChekingAuth } from "../ui/components/checkingAuth"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {


    const {status} = useCheckAuth();

    if( status === 'checking') {
        return <ChekingAuth />
    }

    return(
    <Routes>

        { status === "authenticated" && (
            <Route path="/auth/*" element={<Navigate to="/" replace />}/>
        )}

        {status !== "authenticated" && (
            <Route path="/*" element={<Navigate to="/auth/login" replace />}/>
        )}

        <Route path="/auth/*" element={<AuthRoutes /> } />
        <Route path="/*" element={<TechnicalServiceRoutes /> } />
        
        {/**Login & Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes />  }/> */}

        {/**TechnicalService Page */}
        {/* <Route path="/*"  element={ <TechnicalServiceRoutes /> }/> */}

    </Routes>
    )
}