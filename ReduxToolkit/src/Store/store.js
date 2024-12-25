import {configureStore} from "@reduxjs/toolkit" // for configure store jiske andar object jta hai
import todoReducer from "../features/todo/todoSlices"

// yha pe jo jo va reducer register krenge usi se ye store value le k update krega 

export const store = configureStore({ // yha p sare reducer ka list dale jo hum le k aai hai todoslice se// yha jo name die hai create slice m usi naam se redicer aaiga i.e. nameReducer
    reducer:todoReducer// iske andar sare reducer introduce karna hoga  kyu ki isko btana hota hai ki sare reducer kha p hai
})