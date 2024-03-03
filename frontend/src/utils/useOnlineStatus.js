import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [userOnlineStatus, setUserState] = useState(true);

    useEffect(()=> {
        window.addEventListener("online", ()=> {
            console.log("You are online");
            setUserState(true);
        })

        window.addEventListener("offline", ()=> {
            console.log("You are offline")
            setUserState(false);
        })
    }, [])

    return userOnlineStatus;
}

export default useOnlineStatus;