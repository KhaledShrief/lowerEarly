import { useState, useEffect } from "react";

const useMainUser = () => {
    const [session, setSession] = useState(null); // Use `null` initially to indicate no value

    const mainUser = () => {
        fetch("https://end-game-three.vercel.app/main-user")
            .then((response) => response.json())
            .then((data) => {
                const { isLoggedIn } = data;
                setSession(isLoggedIn);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        mainUser();
    }, []);

    return session; // Return the session value
};

export default useMainUser;
