
import React, { useState, useEffect } from "react"
import axios from "axios";
import { getCookie } from "../API/getCookie";


export const CookieContext = React.createContext();

export function CookieProvider({ children }) {

    const [cookie, setCookie] = useState(null);
    const [isLoading, setIsLoading]=useState(true)

    const token = async () => {
        await getCookie()
            .then((response) => {
                // console.log(response)
                setTimeout(()=>{

                    if (response.data.email) {
                        setCookie(response.data)
                        setIsLoading(false)
                    } else {
                        setCookie("register")
                        setIsLoading(false)
                    };
                }, 2000)
            });
    };
    if (!cookie) token();


    return (
        <CookieContext.Provider value={{cookie, isLoading}}>
            {children}
        </CookieContext.Provider>
    )
}



