import { combineReducers } from "redux";
import {submitForm} from '../action';
import {imageReducer} from '../reducer/images_reducer';
import {SUBMIT_FORM} from '../action/index';


const appReducer = combineReducers({
    images:imageReducer
  })
  // after we fire the action SUBMIT_FORM we have to return to the initial state
  export const reducers = (state, action) => {
    if (action.type === SUBMIT_FORM ) {
        state = undefined 
      }
    return appReducer(state, action)
  }