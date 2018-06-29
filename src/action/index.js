import axios from 'axios';
 const API_key = '8885385-e4c0e7d3e8282b905f3e34900';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const submitForm = (term)=>{
    const request = axios.get(`https://pixabay.com/api/?key=${API_key}&q=${term}&image_type=photo&per_page=4`)
     console.log(request)
    return{
        type:SUBMIT_FORM,
        payload:request
    }
}
export const selelctImage = (image)=>{
   console.log('click')
    return{
        type:SELECT_IMAGE,
        payload:image
    }

}
