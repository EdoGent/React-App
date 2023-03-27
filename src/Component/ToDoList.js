import React from 'react';

export default class ToDoList extends React.Component {
    state = {
        items: this.props,
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

    handleRemoveItem = (index) => {
        const {items} = this.state;
        this.setState({
             items: items.filter((item, i) => i !== index)
        })
    }
    
    render () {
        const {render} = this.props;
        const {items} = this.props;

        return render (items, this.handleRemoveItem)
            //<>
               
                {/* <input name='toDo' value={this.state.newItems} placeholder='add an item' onChange={this.handleInput} />
                <button onClick={() => this.handleAddItem(this.state.newItems)} >Add the item</button>
                <button onClick={this.handleResetItem} >Reset the items</button> */}
            //</>
        
    }
}