import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostList extends React.Component {
    constructor () {
        super ()
        this.state = {
            posts : []
        }
    }

    componentDidMount () {
        const axios = require ('axios')
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            const posts = response.data
            this.setState({ posts })
        })
    }

    render () {
        const posts = this.state.posts
        return (
            <div>
                <h1>Showing posts</h1>
                <ul>
                    {
                        posts.map(post => {
                        return <li key = {post.id}><Link to ={`posts/${post.id}`}>{ post.title }</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostList