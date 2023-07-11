import React from "react"

class Users extends React.Component {
    users = [
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
    render() {
        if(this.users.length > 0) {
            return (<div>
                {this.users.map((user) => (<div className="user" key={user.id}>
                    <h3>{user.firstname} {user.lastname}</h3>
                    <p>{user.bio}</p>
                    <b>{user.isHappy ? "Is happy" : "Not happy"}</b>
                </div>))}
            </div>)
        }
        else {
            return (<div className="user">
                <h3>No users</h3>
            </div>)
        }
    }
  }

export default Users