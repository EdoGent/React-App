import React from 'react';

export default class UncontrolledLogin extends React.Component { 
    constructor(props) {
        super(props)
        this.inputNameFocus = React.createRef()
    }

    componentDidMount() {
        this.inputNameFocus.current.focus()
    }
    
    state = {
        username: '',
        password: '',
        remember: false,
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

    onLogin = (username, password) => {
        console.log(username, password);
    }

    handleReset = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }

    render () {
       const {username, password, remember} = this.state;
       const isDisabled = username === '' || password === '';
        return (
            <>
                <input name='username' value={username} onChange={this.handleChangeInput} ref={this.inputNameFocus} />
                <input name='password' value={password} type='password' onChange={this.handleChangeInput}/>
                <input name='remember' type='checkbox' checked={remember} onChange={this.handleChangeInput}/>
                <button disabled={isDisabled} onClick={() => this.onLogin(username, password)}>Login</button>
                <button onClick={this.handleReset} >Reset</button>
            </>
        )
    }
}