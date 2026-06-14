import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({});

export const UserProvider = (props) => {
    const {children} = props;


    const [userInfo, setUserInfo] = useState(null);
    // const contextName = "masa";
    return (
        <UserContext.Provider value={ {userInfo,setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}