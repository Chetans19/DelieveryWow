import React, { Component } from 'react';


export default class RegForm extends Component {

    constructor(props) {
        super(props)

        this.handleUsername = this.handleUsername.bind(this)
        this.handleFullname = this.handleFullname.bind(this)
        this.handleAddress  = this.handleAddress.bind(this)
        this.handleCity     = this.handleCity.bind(this)
        this.handleMobile   = this.handleMobile.bind(this)
        this.handleEmail    = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleRegister = this.handleRegister.bind(this)


        this.state = {
            Username : '',
            Fullname : '',
            Address  : '',
            City     : '',
            Mobile   : '',
            Email    : '',
            Password : '',
        }
    }


    handleUsername = (event) => this.setState( { Username : event.target.value } );
    handleFullname = (event) => this.setState( { Fullname : event.target.value } );
    handleAddress  = (event) => this.setState( { Address  : event.target.value } );
    handleCity     = (event) => this.setState( { City     : event.target.value } );
    handleMobile   = (event) => this.setState( { Mobile   : event.target.value } );
    handleEmail    = (event) => this.setState( { Email    : event.target.value } );
    handlePassword = (event) => this.setState( { Password : event.target.value } );
    handleRegister = (event) => { event.preventDefault(); console.log(this.state) }
        
    userData; 
    // Storing data to sessionStorage using React lifeCycles 
    // declared a variable to get items fro localStaorage
    componentDidMount() {
        this.userData = JSON.parse(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')) {
            this.setState({
                Username : this.userData.Username,
                Fullname : this.userData.Fullname,
                Address  : this.userData.Address,
                City     : this.userData.City,
                Mobile   : this.userData.Mobile,
                Email    : this.userData.Email,
                Password : this.userData.Password
            })
        }
        // else { this.state = { Username : '', Email : '', Password : '' ,} }

    }
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('newUser', JSON.stringify(nextState))
    }


    render() {
        const { Username, Fullname, Address, City, Mobile,  Email, Password } = this.state

        return (
            
            <div className = ' container container-sm '>
                <form onSubmit ={this.handleRegister} className=' ' >
                
                    <div className = ' '>
                        {/* <label>Username</label> */}
                        <input 
                            type='text' 
                            value={Username} 
                            onChange={this.handleUsername} 
                            placeholder='Username' 
                            className = 'form-control'  
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>Fullname</label> */}
                        <input 
                            type='text' 
                            value={Fullname} 
                            onChange={this.handleFullname} 
                            placeholder='FullName' 
                            className = 'form-control'
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>Address</label> */}
                        <input 
                            type='text' 
                            value={Address} 
                            onChange={this.handleAddress}  
                            placeholder='Address' 
                            className = 'form-control'                                
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>City</label> */}
                        <input 
                            type='text' 
                            value={City} 
                            onChange={this.handleCity}  
                            placeholder='City' 
                            className = 'form-control'                                
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>mobile</label> */}
                        <input 
                            type='number' 
                            value={Mobile} 
                            onChange={this.handleMobile}  
                            placeholder='Mobile' 
                            className = 'form-control'
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>Email</label> */}
                        <input 
                            type='text' 
                            value={Email} 
                            onChange={this.handleEmail} 
                            placeholder='Email' 
                            className = 'form-control'                            
                        />
                        
                    </div>

                    <div className = ' '>
                        {/* <label>Password</label> */}
                        <input 
                            type='password' 
                            value={Password}    
                            onChange={this.handlePassword}  
                            placeholder='Password' 
                            className = 'form-control' 
                            required 
                        />
                        
                    </div>
                    <button 
                        type='submit' 
                        className = '' >
                            Confirm
                    </button>
                    
                </form>
            </div>
                
            
        );
    }
};
