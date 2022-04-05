
import React, { useState } from "react"
import { getCookie } from "../API/apiRequests";


export const CookieContext = React.createContext();

export function CookieProvider({ children }) {

    const [cookie, setCookie] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

//________ GET request to check if jwt exist, if true safe jwt in cookie state___________ 
    const token = async (delay = 2000) => {
        await getCookie()
            .then((response) => {
                setTimeout(() => {
                    if (response.data.email) {
                        setCookie(response.data)
                        setIsLoading(false)
                    } else {
                        setCookie(false)
                        setIsLoading(false)
                    };
                }, delay)
            });
    };
    if (isLoading) token();

    const updateContext = async ()=>{
        await token(1);
    }
    return (
        <CookieContext.Provider value={{ cookie, isLoading, updateContext }}>
            {children}
        </CookieContext.Provider>
    )
}



