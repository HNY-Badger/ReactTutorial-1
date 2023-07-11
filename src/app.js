import React from 'react';
import Header from './components/header';
import Users from './components/users';
import AddUser from './components/addUser';
import axios from 'axios';

const baseurl = "https://reqres.in/api/users?page=1"

class App extends React.Component {  
    constructor(props) {
        super(props)

        axios.get(baseurl).then((res) => {
            this.setState({ users: res.data.data })
        })

        this.state = {
            users: [
                {
                    id: 1,
                    firstname: "Albert",
                    lastname: "Wesker",
                    bio: "Albert's bio",
                    age: 43,
                    isHappy: false
                },
                {
                    id: 2,
                    firstname: "Ada",
                    lastname: "Wong",
                    bio: "Ada's bio",
                    age: 27,
                    isHappy: true
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users : [...this.state.users, {id, ...user}] })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    render() {
        return (<div>
            <Header title="Users list"/>
            <main>
                <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }
}

export default App