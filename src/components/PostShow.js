import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PostShow extends React.Component {
    constructor () {
        super ()
        this.state = {
            post : {},
            comments : [],
            user : {}
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            const post = response.data
            const userId = post.userId
            const req2 = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const req3 = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            Promise.all([req2, req3])
            .then(responses => {
                const user = responses[0].data
                const comments = responses[1].data
                this.setState({ post, user, comments })
            })
        })
    }
     

    render () {
        const { post, comments, user } = this.state
        return (
            <div className = "container">
                <div className = "jumbotron">
                    <h2>Post - { post.id }</h2>
                    <p><b>Author :</b>{ user.name }</p>
                    <p><b>Title :</b> { post.title }</p>
                    <p><b>Body :</b>{ post.body }</p>
                </div>
                <h3>Comments</h3>
                <div className = "container">
                <ul className = "list-group">
                    {
                        comments.map(comment => {
                            return <li key = { comment.id }  className = "list-group-item">{ comment.body }</li>
                        })
                    }
                </ul>
                <Link to = {`/users/${user.id}`}>More posts from the author</Link><hr/>
                </div>
            </div>
        )
    }
}

export default PostShow 