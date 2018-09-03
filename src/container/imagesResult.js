import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../action';
import classes from '../App.css';




 class ImagesResult extends Component {
     state = {
         show:false
     }
   
  render() {
   
    const imagesResult = this.props.images.map(img=>{
     
          return(
              <div className={classes.All}>
              <img 
              src={img.largeImageURL} 
              onClick={()=>{
                  this.props.selelctImage(img)
                 

                  
                   } }
              />
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

                <li>{this.props.first.likes} <i className="fas fa-heart"></i></li>
                <li>{this.props.first.downloads} <i className="fas fa-download"></i></li>
                <li>{this.props.first.comments} <i className="far fa-comment"></i></li>

                </ul>)
                
    }
   
    
    return (
        <React.Fragment>
       <div className={classes.Album}>
          <div className={classes.Details}  >
              {imageDetails}
            <div className={classes.Information}>
                {likes}
            </div>

          </div>
          <div className={classes.ImageList}>
             {imagesResult}
          </div>
        
          
        </div>
        <div onClick={()=>{this.props.clickHnadle()}} className={classes.More}  >
           <p >show more images</p>
        </div>
        <div className={classes.AllImages}>
            {
              this.props.moreImages.map(img=>{
     
             return(
                  <div  className={classes.MoreImages} 
                       onClick={()=>{
                        this.props.ZoomImage(img.largeImageURL)
                         
                       }
                           
                       }>
                    <img src={img.largeImageURL}  />
                  </div>
                  )
 
                }) 
            }
        </div>
      
        
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        moreImages:state.images.fullList,
        images:state.images.listImage,
        first:state.images.first,
      
    
       
      
    }
   }
export default connect(mapStateToProps,actions)(ImagesResult);


