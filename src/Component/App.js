import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';

class App extends React.Component {
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

    render () {
        return (
            <div>
                <Hello />
                <InteractiveWelcome />
                <Login onChangeInput={this.handleChangeInput} state={this.state} onLogin={this.onLogin} />
            </div>
        )
    }
}

export default App;