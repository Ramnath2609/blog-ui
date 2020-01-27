import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor () {
        super ()
        this.state = {
            users : []
        }
    }

    componentDidMount () {
        const axios = require('axios')
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const users = response.data
            this.setState({ users })
        })
    }

    render () {
        const users =  this.state.users
        return (
            <div>
                <h1>Listing users - { users.length }</h1>
                <div className = "row">
                    <div className = "col-sm-3">
                    <ul className ="list-group">
                    {
                        users.map(user => {
                            return <li key ={ user.id } className = "list-group-item "><Link to ={ `/users/${user.id}`}>{ user.name }</Link></li>
                        })
                    }
                </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList