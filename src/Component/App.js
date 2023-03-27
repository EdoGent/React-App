import React from 'react';
import Hello from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import UncontrolledLogin from './UncontrolledLogin';
import ToDoList from './ToDoList';
import Container from './Container';

class App extends React.Component {
    state = {
        items: ['Pulire la casa', 'Lavare la macchina', 'Fare la spesa', 'Andare dal dentista'],
        newItems: ''
    }
    
    render () {
        const  {items} = this.state;
        return (
            <Container title='This is a title for my Application'>
                <Hello />
                <InteractiveWelcome />
                <UncontrolledLogin />
                <ToDoList items={items}
                    render={(items, deleteItem) => (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    )} 
                />
            </Container>
        )
    }
}

export default App;