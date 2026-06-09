import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
    
        const {displayName, email, uid} = result.user;

        return {
            ok: true,
            displayName, email, uid
        }

        
    } catch(error){
        
        const errorMessage = error.message; 

        return{
            ok: false,
            errorMessage,
        }

    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            uid, email, displayName
        }

    } catch (error){
        return {ok: false, errorMessage: error.message}
    }
}