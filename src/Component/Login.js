import React from 'react';

export default class Login extends React.Component {
    render () {
       const {username, password, remember} = this.props.state;
       const isDisabled = username === '' || password === '';
        return (
            <>
                <input name='username' value={username} onChange={this.props.onChangeInput}/>
                <input name='password' value={password} type='password' onChange={this.props.onChangeInput}/>
                <input name='remember' type='checkbox' checked={remember} onChange={this.props.onChangeInput}/>
                <button disabled={isDisabled} onClick={() => this.props.onLogin(username, password)}>Login</button>
            </>
        )
    }
}