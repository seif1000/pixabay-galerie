import React, { Component } from 'react';
import * as actions from "../action";
import {connect} from 'react-redux';
import {submitForm} from '../action';
import ImagesResult from './imagesResult';
import 'font-awesome/css/font-awesome.min.css';


 class SearchBar extends Component {
    state = {
        term:'',
        show:false
    }
  componentWillUpdate(nextProps){
      if(this.props.zoome !==nextProps.zoome  ){
        this.setState({
          show:!this.state.show
       })
      }
     
    }
    submitHandler = (e)=>{
      e.preventDefault();
      this.props.submitForm(this.state.term)
      this.setState({
        term:""
      })
     
    }
    changeHandler = (e)=>{
      this.setState({
        term:e.target.value
      })
    }
    onclickHandler = ()=>{
      this.props.MoreImages(this.state.term);
    }
  render() {
  
    return (
     <React.Fragment>
         <div className="Card" style={{display:this.state.show?'block':'none'}}>
            <span onClick={()=>{this.setState({show:false})}} class="Close"> &times; </span>
            <img src={this.props.zoome} alt=""/>
            
          </div>
        <div className="Form">
        <form onSubmit={this.submitHandler} >

           <input type="search" onChange={this.changeHandler} placeholder='search for images...'/>
           <button type='submit'><i className="fa fa-search"></i></button>
           
        </form>
        {this.props.images.length===0?<p style={{fontSize:'28px',textAlign:'center',color:"white"}}>search for any image.</p>:<ImagesResult clickHnadle = {this.onclickHandler} />}
       

      </div>
     </React.Fragment>
    
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    images:state.images.listImage,
    zoome:state.images.zoomImage
  }
}

export default connect(mapStateToProps,actions)(SearchBar);
