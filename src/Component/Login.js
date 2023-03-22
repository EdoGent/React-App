import React from 'react';

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleChangeInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }
    
    render () {
        return (
            <>
                <input name='username' value={this.state.username} onChange={this.handleChangeInput}/>
                <input name='password' value={this.state.password} type='password' onChange={this.handleChangeInput}/>
                <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleChangeInput}/>
            </>
        )
    }
}