import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postAction'

class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            posts: [],
            todos:[]
        }
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.newPost) {
                this.props.todos.unshift(nextProps.newPost);
        }
    }
    setPost(res){
        this.setState({todos:res.data});
    }


    render() {
        const todoItems = this.props.todos.map(todo =>(
            <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p> lhwllqjna
                    {todo.completed}
                </p>
            </div>
        ));
        return (
            <div>
                <h1>Todo</h1>
                {todoItems}
            </div>
        )
    }
}

Post.prototypes ={
    fetchPosts: PropTypes.func.isRequiered,
    todos: PropTypes.array,
    newPost: PropTypes.object

}

const mapStateToProps = state => ({
    todos:state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(Post);