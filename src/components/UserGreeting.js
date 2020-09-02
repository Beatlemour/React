import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Hello Aashish</div>

        //return this.state.isLoggedIn ? <div>Welcome Aashish</div> : <div>Welcome Guest</div>

        /* if(this.state.isLoggedIn){
            return (
                <div>
                    Welcome Aashish
                </div>
            )
        } else{
        return (  
            <div>
                Please Login
            </div>
        )} */
    }
}

export default UserGreeting
