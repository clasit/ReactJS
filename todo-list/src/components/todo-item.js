import React from 'react';

class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(){        
        this.props.removeItem(this.props.item);
    }

    render(){
        var item = this.props.item;
        return(
            <div>
                {item.text}
                <input type="button" value="X" onClick={this.removeItem}/>
                <span></span>
            </div>
        );
    }
}

export default TodoItem;