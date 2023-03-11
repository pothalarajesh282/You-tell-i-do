/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import {Redirect} from 'react-router-dom'
import './index.css'

class MasterLogin extends Component {
  state = {userInput: '', passwordInput: ''}

  onChangeUserName = event => {
    this.setState({userInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onLogin = () => {
    const {userInput, passwordInput} = this.state

    const todoList = localStorage.getItem('todoList')
    const parsedList = JSON.parse(todoList)

    const userDetails = {
      userName: userInput,
      password: passwordInput,
    }

    let isUserFound = false

    // eslint-disable-next-line no-restricted-syntax
    for (const user of parsedList) {
      if (
        user.userName === userDetails.userName &&
        user.password === userDetails.password
      ) {
        isUserFound = true
      }
    }

    if (isUserFound) {
      const {history} = this.props
      history.replace('/masterpage')
    } else {
      const {history} = this.props
      // eslint-disable-next-line no-alert
      alert('user not found sign up to continue')
      history.replace('/mastersignup')
    }
  }

  render() {
    const {userInput, passwordInput} = this.state
    return (
      <div className="master_login_container">
        <h1 className="signupSuccess">Login to here to Continue..</h1>
        <form className="form" id="form">
          <label className="label" htmlFor="userName">
            User Name
          </label>
          <input
            className="input"
            id="userName"
            value={userInput}
            onChange={this.onChangeUserName}
            type="text"
            placeholder="Enter Your User Name"
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            id="password"
            value={passwordInput}
            onChange={this.onChangePassword}
            type="password"
            placeholder="Enter Your Password"
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          />
          <div className="signinButtonContainer">
            <button className="signinButton" onClick={this.onLogin}>
              Log in
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MasterLogin
