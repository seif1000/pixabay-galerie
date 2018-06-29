import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selelctImage }from '../action';



 class ImagesResult extends Component {
     
    
  
   
  render() {
    console.log(this.props.first)
    const imagesResult = this.props.images.map(img=>{
     
          return(
              <div className="All">
              <img src={img.largeImageURL} onClick={()=>{this.props.selectImage(img)}}/>
              </div>
          )
      
    })
    
    let imageDetails =null
    let  likes = null
    
    if(!this.props.first){
        imageDetails=null
    }else{
        imageDetails= <img src={this.props.first.largeImageURL}/>
        
        likes = (<ul>

                <li>{this.props.first.likes} <i class="fas fa-heart"></i></li>
                <li>{this.props.first.downloads} <i class="fas fa-download"></i></li>
                <li>{this.props.first.comments} <i class="far fa-comment"></i></li>

                </ul>)
                
    }
   
    return (
       <div className='Album'>
          <div className='Details'>
              {imageDetails}
            <div className='Information'>
                {likes}
            </div>

          </div>
          <div className="ImageList">
             {imagesResult}
          </div>
           
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({selectImage:selelctImage},dispatch)
   }
const mapStateToProps = (state)=>{
    return {
        images:state.images.listImage,
        first:state.images.first,
       
      
    }
   }
export default connect(mapStateToProps,mapDispatchToProps)(ImagesResult);


