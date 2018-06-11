import React from 'react';
import TodoList from '../components/todo-list';


class Todo extends React.Component {

    listItem = [];

    constructor(){
        super();

        this.listItem = [
            {id: 1, text: 'Nota 1'},
            {id: 2, text: 'Nota 2'},
            {id: 3, text: 'Nota 3'}
        ];

        // this.removeItem = this.removeItem.bind(this);
    }

    removeItem(item){
        console.log( item );
        /* var index = 0;
        this.props.items.splice(index, 1);
        console.log( this.props.items );
        this.setState({listItem: listItem});
        */
    }

    render(){
        return(
            <TodoList items={this.listItem} />
        );
    }
}

export default Todo;