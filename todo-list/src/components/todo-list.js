import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {

    constructor(){
        super();
    }

    /*
    removeItem(item){
        console.log( this.props.items );
        var index = 0;
        this.props.items.splice(index, 1);
        console.log( this.props.items );
        this.setState({todoItems: todoItems});
    }
    */   

    render(){        
        return this.props.items.map(
            (item, index) =>                            
                <TodoItem item={item} removeItem={this.props.removeItem}/>
        );    
    }
}

export default TodoList;