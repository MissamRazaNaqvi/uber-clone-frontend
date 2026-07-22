import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // api call for get user details and set user state

    const init = async (req, res) => {
        console.log("init called");
    }

    useEffect(() => {
        init();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
}