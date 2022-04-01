
import React, { useState, useEffect } from "react"
import { getCookie } from "../API/getCookie";


export const CookieContext = React.createContext();

export function CookieProvider({ children }) {
    const [cookie, setCookie] = useState("empty");

    useEffect(() => {
        const token = async () => {
            await getCookie()
                .then((response) => {
                    if (response.data.email) {
                        setCookie(response.data)
                    } else {
                        setCookie("register")
                    };
                });
        };
        token();
    }, []);

    return (
        <CookieContext.Provider value={cookie}>
            {children}
        </CookieContext.Provider>
    )
}



