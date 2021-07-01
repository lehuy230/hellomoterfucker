import * as types from './../constants/actionType';
import * as Message from './../constants/Message';

var initialState =Message.MSG_WELLCOME;


const message =(state = initialState,action)=>{
    switch(action.type){
        case types.CHANGE_MESSAGE:
            console.log(action);
            return action.message;   
        default:return [...state];
    }
}
export default message;