import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

    const { status, displayName } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { uid, email, displayName } = user;
            dispatch(login({ uid, email, displayName }));
        });

        return () => unsubscribe();
    }, [dispatch]);

    return {
        status,
        displayName
    }
}