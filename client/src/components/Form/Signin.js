import React, { Component } from 'react';



export default class SigInform extends Component {

    constructor(props) {
        super(props)

        this.handleUsername = this.handleUsername.bind(this)
        // this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSignIn   = this.handleSignIn.bind(this)


        this.state = {
            Username : '',
            // Email : '',
            Password : '',
        }
    }


    handleUsername = (event) => this.setState( { Username : event.target.value } );
    // handleEmail = (event) => this.setState( { Email    : event.target.value } );
    handlePassword = (event) => this.setState( { Password : event.target.value } );
    handleSignIn   = (event) => { console.log(this.state);  event.preventDefault()}
        
    userData; 
    // Storing data to sessionStorage using React lifeCycles 
    // declared a variable to get items fro localStaorage
    componentDidMount() {
        this.userData = JSON.parse(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')) {
            this.setState({
                Username: this.userData.Username,
                // Email: this.userData.Email,
                Password: this.userData.Password
            })
        }
        // else { this.state = { Username : '', Email : '', Password : '' ,} }

    }
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState))

    }


    render() {
        const { Username /*, Email*/, Password } = this.state

        return (
            
            <div className = ' '>
                <form onSubmit={this.handleSignIn} className=' ' >
                    <div className = ' '>
                        {/* <label>Username</label> */}
                        <input 
                            type='text' 
                            value={Username} 
                            onChange={this.handleUsername} 
                            placeholder='Username' 
                            className = ''  
                        />
                        
                    </div>

                    {/* <div className = ' '>
                        <label>Email</label>
                        <input type='text' value={Email} onChange={this.handleEmail} className = 'form-control'/>
                        
                    </div> */}

                    <div className = ' '>
                        {/* <label>Password</label> */}
                        <input 
                            type='password' 
                            value={Password} 
                            onChange={this.handlePassword} 
                            placeholder='Password' 
                            className = '' 
                            required                                 
                        />
                        
                    </div>
                    <button 
                        type='submit' 
                        className = ' ' >
                            SignIn
                    </button>
                    {/* <button type='button' className = ' ' > <a  href = ''   >Register</a></button> */}

                </form>
            </div> 
                
        );
    }
};