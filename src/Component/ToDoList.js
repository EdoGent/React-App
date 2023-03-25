import React from 'react';

export default class ToDoList extends React.Component {
    state = {
        items: ['Pulire la casa', 'Lavare la macchina', 'Fare la spesa', 'Andare dal dentista'],
        newItems: ''
    }
    
    handleInput = (event) => {
        const value = event.target.value
        this.setState({
            newItems: value
        })
    }

    handleAddItem = (item) => {
        if(item !== '') {
            this.setState({
                items: [...this.state.items, item],
                newItems: ''
            })
        }
        return
    }

    handleResetItem = () => {
        this.setState({
            items: []
        })
    }
    
    render () {
        return (
            <>
                <ul>{this.state.items.map ((item, index) => <li key={index}>{item}</li>)}</ul>
                <input name='toDo' value={this.state.newItems} placeholder='add an item' onChange={this.handleInput} />
                <button onClick={() => this.handleAddItem(this.state.newItems)} >Add the item</button>
                <button onClick={this.handleResetItem} >Reset the items</button>
            </>
           
        )
    }
}