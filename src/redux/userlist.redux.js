import axios from'axios'
import { USER_LIST } from './types'

const initState = {
    userlist:[]
}

//reducer
export function userlist(state=initState,action){
    switch(action.type){
        case USER_LIST:
            return {...state,userlist:action.payload}
        default :
            return state
    }
}

//action
function userList(data){
    return {type:USER_LIST,payload:data}
}

export function getUserList(type){
    return dispatch=>{
        axios.get('/user/list?type='+type)
        .then(res=>{
            if(res.data.code===0){
                dispatch(userList(res.data.data))
            }
        })
    }
}