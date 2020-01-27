import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor () {
        super ()
        this.state = {
            user : {},
            posts : []
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id
        const req1 = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
        const req2 = axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
        Promise.all([req1, req2])
        .then((responses) => {
            const user = responses[0].data
            const posts = responses[1].data
            this.setState({ user , posts})
        } )
       
    }

    render () {
        const { user, posts } = this.state
    
        return (
            <div>
                <h4><b>Name :</b> { user.name }</h4>
                <h3>Listing posts</h3>
                <ul>
                    {
                        posts.map(post => {
                            return <li key = {post.id} ><Link to ={`/posts/${post.id}`}>{ post.title }</Link></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default UserShow