import React from "react"; 
import "./Login.css"; 

class Login extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleLoginClick = this.handleLoginClick.bind(this); 
    }

    handleInputChange(event) {
        const target = event.target; 
        this.setState({
            [target.name]:target.value
        }); 
    }

    handleLoginClick(event) {
        localStorage.setItem("authorized", true); 
        if (this.props.location.state && this.props.location.state.from) {
            console.log("came from there"); 
            this.props.history.push(this.props.location.state.from); 
        } else {
            this.props.history.push("/users"); 
        }
    }

    render() {

        return (
            <div className="loginForm">
                <h1>Login</h1>
                <div className="fields">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="">Password</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </div>

                    <div className="buttonBar">
                        <button onClick={this.handleLoginClick}>Login</button>
                        <button>Forgot</button>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Login; 