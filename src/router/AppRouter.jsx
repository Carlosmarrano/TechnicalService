import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TechnicalServiceRoutes } from "../TechnicalService/routes/TechnicalServiceRoutes"
import { useDispatch, useSelector } from "react-redux"
import { ChekingAuth } from "../ui/components/checkingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login } from "../store/auth/authSlice"

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async(user) => {
            if( !user ) return dispatch(logout());

            const {uid, email, displayName} = user;
            dispatch(login({uid, email, displayName}))
        })
    }, []);

    if( status === 'checking') {
        return <ChekingAuth />
    }

    return(
    <Routes>

        {
            (status === "authenticated")
            ? <Route path="/"  element={ <TechnicalServiceRoutes /> }/>
            : <Route path="/auth/*" element={ <AuthRoutes />  }/>
        }

        <Route path="/" element={<Navigate />} />
        
        {/**Login & Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes />  }/> */}

        {/**TechnicalService Page */}
        {/* <Route path="/*"  element={ <TechnicalServiceRoutes /> }/> */}

    </Routes>
    )
}