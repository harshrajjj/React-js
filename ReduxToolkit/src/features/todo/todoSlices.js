import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = { // initial state of to do yha initial state declear kie hai
    //jo jo humko lena hai usko yhi likhte hai  uska data structure k saath like todos ko array banai hai and uske andar kya kya hai ye likh die yha
    todos:[{id:1,text:"hello world"}]
}

// slice is a type of recucer and reducer is a type of metod  
export const todoSlice = createSlice({
    // slice 3 cheej leta hai name initial state and sare reducers wo v ek object k form m 

    name:"todo",// name is default it is redux rule 
    initialState,
    reducers: { // iske andaar property aata hai and ek function aata hai 
        // yha function k andar do cheej ka access hota hai ek state and ek action ye syntax he hai // iske andar function aata hai jo v hmko store karna hai
        //like key function pair
        addTodo : (state ,action) => {
            // ye state update state value at the store milti hai  
            const todo = {
                id:nanoid(),
                text:action.payload // yha payload default hai ye syntax for content
            }
            state.todos.push(todo) // phly aise nhi hota hai 
        },
        removeTodo:(state,action) => {// state k andar jo v current state hai wo milta hai and action k andar jo v adata pass hua hai wo milta hai 
            state.todos= state.todos.filter((todo) => todo.id!==action.payload)

        },
    }

})

// yha individual functonality export kar rhe hai kyu ki ye conponent m kaam aaiga hmko // sara reducer export karna hoga kyu ki hmko nhi pta ki kon se component m kon sa wala reducer kaam aa jai
export  const {addTodo,removeTodo} = todoSlice.actions;


// kux aur slice v bnate hai jaise auth slice to usko humo yha se export karna he prega individual exponent ko v export karna he prega kyu ki wo conponent m kaam aainge and ye store m kaam aaigga tab se store iske data rekhega 
export default  todoSlice.reducer
// sare reducer ka main source export kar rhe hai kyu ki hmko ise kaam m lena hai apne state k andar





