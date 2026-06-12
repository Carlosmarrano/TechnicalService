import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthStatus = () => {

    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setDisplayName(user.displayName || user.email || "");
            } else {
                setDisplayName("");
            }
        });

        return () => unsubscribe();
    }, []);

    return {displayName};
}