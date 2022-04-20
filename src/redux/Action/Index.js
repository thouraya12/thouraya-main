import { ADD_TODO  , CHECKED_TODO, DELETE_TODO , UPDATE_TODO} from "../Constants/Action-types"
export const addTodo =(payload)=>{

    return{
        type:ADD_TODO,
        payload
    }
}
export const checkTodo =(payload)=>{

    return{
        type:CHECKED_TODO,
        payload
    }
}
export const deleteTodo =(payload)=>{

    return{
        type:DELETE_TODO,
        payload
    }
}
export const updateTodo =(payload)=>{

    return{
        type:UPDATE_TODO,
        payload
    }
}