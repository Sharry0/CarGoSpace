
import React, { useState } from "react"
import { getCookie } from "../API/getCookie";


export const CookieContext = React.createContext();

export function CookieProvider({ children }) {

    const [cookie, setCookie] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
//________ GET request to check if jwt exist, if true safe jwt in cookie state___________ 
    const token = async () => {
        await getCookie()
            .then((response) => {
                setTimeout(() => {
                    if (response.data.email) {
                        setCookie(response.data)
                        setIsLoading(false)
                    } else {
                        setIsLoading(false)
                    };
                }, 2000)
            });
    };
    if (isLoading) token();

    return (
        <CookieContext.Provider value={{ cookie, isLoading }}>
            {children}
        </CookieContext.Provider>
    )
}



