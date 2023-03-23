import React from 'react';

export default class ToDoList extends React.Component {
    state = {
        items: ['Pluto', 'PIppo', 'Tizio', 'Caio'],
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
                items: [...this.state.items, item]
            })
        }
        return
    }
        
    render () {
        return (
            <>
                <ul>{this.state.items.map ((item, index) => <li key={index}>{item}</li>)}</ul>
                <input name='name' value={this.state.newItems} placeholder='add an item' onChange={this.handleInput} />
                <button onClick={() => this.handleAddItem(this.state.newItems)} >Add the item</button>
            </>
           
        )
    }
}