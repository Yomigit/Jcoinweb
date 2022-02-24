import { createContext } from "react";

interface authContextObj {
    isLoggedin: boolean
    login:() => void
    logout: () => void
}

export const authContext = createContext<authContextObj>(
    {isLoggedin:false,
    login:() => {},
    logout:() => {}
    })