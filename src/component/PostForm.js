import React, { Component } from 'react'
import PropTypes from  'prop-types'
import {connect} from 'react-redux'
import {createPosts} from '../actions/postAction'

 class PostForm extends Component {
     constructor(props){
         super(props);
         this.state={
             title:'' 
         };

         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }
onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
    e.preventDefault();
    const post = {
        title: this.state.title,
        completed: false
    }

    this.props.createPosts(post)

}

    render() {
        return (
            <div>
                <h1>Add Todo</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

PostForm.proptype ={
    createPosts: PropTypes.func.isRequired
}
export default connect(null,{createPosts})(PostForm);
