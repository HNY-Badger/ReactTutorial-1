import React from "react"
import AddUser from "./addUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }

    user = this.props.user
    render() {
      return (
        <div className="user">
            <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.onDelete(this.user.id)}/>
            <IoHammerSharp onClick={() => {
                this.setState({
                    editForm: !this.state.editForm
                })
            }} className="edit-icon"/>
            <h3>{this.user.firstname} {this.user.lastname}</h3>
            <p>{this.user.bio}</p>
            <b>{this.user.isHappy ? "Is happy" : "Not happy"}</b>

            {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
        </div>
      )
    }
  }

export default User