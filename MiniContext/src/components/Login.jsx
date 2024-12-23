import React ,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")


    // wha hum set context m jo v data dale the wo yha hum le rhe hai useContext ka use kar k
    const {setUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({userName,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
                value={userName}
                onChange={(event) => {
                    setuserName(event.target.value)
                }}
                placeholder='username' />
                {" "}
            <input type="text" 
            onChange={(event) => {
                setPassword(event.target.value)
            }}
            placeholder='password' />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}

export default Login
