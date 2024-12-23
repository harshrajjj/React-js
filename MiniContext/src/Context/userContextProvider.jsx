import React from "react";
import UserContext from "./UserContext";

// yhe hum contextProvider naam ka func bna reh hai jo ki children argument le rha hai yha children ye hai ki jis v element ko hum yha wrap krenge uska value children m aa jaiga 
const UserContextProvider = ({children}) => {
    //yha hum user bna rhe hai jiska value humko global karna hai 
    const [user , setUser] = React.useState(null)
    return(
        /* yha hum usecontext use kie hai usme .provider naam ka func hota hai jo bha rah h ki isko provide karna hai iss wrappet k andar value die dyee hai jo v value k andar dalenge wo mera global avilavle ho jaiga jo v is use contextprovider k andar wrapp hoga */ 
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider