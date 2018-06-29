import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitForm} from '../action';


 class SearchBar extends Component {
    state = {
        term:''
    }
    submitHandler = (e)=>{
      e.preventDefault();
      this.props.submitForm(this.state.term)
      this.setState({term:" "})

    }
    changeHandler = (e)=>{
      this.setState({
        term:e.target.value
      })
    }
  render() {
  
    return (
      <div className='Form'>
        <form onSubmit={this.submitHandler} >
           
            <input type="text" onChange={this.changeHandler}/>
           
       
            <button type='submit'>submit</button>
          
            

        </form>
       

      </div>
    )
  }
}
const mapDistpatchToProps = (dispach)=>{
  return bindActionCreators({submitForm:submitForm},dispach)
}

export default connect(null,mapDistpatchToProps)(SearchBar);
