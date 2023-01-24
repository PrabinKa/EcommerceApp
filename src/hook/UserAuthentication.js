import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export default function UserAuthentication(){
    const [user, setUser] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser(undefined)
            return unsubscribe
        })
    },[])
    return{user}
}