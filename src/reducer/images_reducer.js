import {SUBMIT_FORM,SELECT_IMAGE}  from '../action/index';
 const initialState ={
   listImage:[],
   first:null,
   firstImag:null
 }
export const imageReducer = (state=initialState,action)=>{
  console.log(action)
   switch (action.type) {
     
     case SUBMIT_FORM:
        
       //return [...action.payload.data.hits,...state.listImage]
       return{
        ...state,
        listImage:[...action.payload.data.hits,...state.listImage],
        first:action.payload.data.hits[0]
      }
    
    case SELECT_IMAGE :
           return{
               
                 ...state,
                first:action.payload
               
           }
     default:
       return state
   }
}