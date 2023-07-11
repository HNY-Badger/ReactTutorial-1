import React from 'react';
import Header from './components/header';
import Users from './components/users';
import AddUser from './components/addUser';

class App extends React.Component {  
    constructor(props) {
        super(props)
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
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users : [...this.state.users, {id, ...user}] })
    }

    render() {
        return (<div>
            <Header title="Users list"/>
            <main>
                <Users users={this.state.users}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }
}

export default App