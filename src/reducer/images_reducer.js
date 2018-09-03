import {SUBMIT_FORM,SELECT_IMAGE,FULL_LIST,ZOOM_IMAGE}  from '../action/index';
 const initialState ={
   listImage:[],
   first:null,
   fullList :[],
   zoomImage:null,
 }
export const imageReducer = (state=initialState,action)=>{
  console.log(action)
   switch (action.type) {
     
     case SUBMIT_FORM:
        
     
       return{
        ...state,
        listImage:[...action.payload.data.hits.slice(0,4),...state.listImage],
        first:action.payload.data.hits[0]
      }
    
    case SELECT_IMAGE :
           return{
               
                 ...state,
                first:action.payload
               
           }
      case FULL_LIST :
        return{
          ...state,
          fullList:[...action.payload.data.hits.slice(4),...state.fullList]

      }
      case ZOOM_IMAGE:
      return{
        ...state,zoomImage:action.payload
      }
     default:
       return state
   }
}