
import React,{useContext, useState} from 'react'
import { CookieProvider } from '../context/userContext'

export default function isAuth({children}) {
    const [islogged, setIsLogged] = useState(null);
    const cookie = useContext(CookieProvider);
    console.log(cookie)
  return (
    <div>isAuth</div>
  )
}
