import React, { Component } from 'react';

class IndexComponent extends Component {

    constructor(props){
        super(props);
        let items = [1,2,3,5,6];
        this.state = {items};
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        let items = this.state.items;
        items.push(item);
        this.setState({items});
    }

    render() {
        if (this.state.items.length === 0) {
            return (
                <p ref="empty">Index is empty.</p>
            );
        }
        return (
            <section>
                <h2>react-webpack-boilerplate</h2>
                {this.state.items.map( (item) => {
                    return(<li>{item}</li>);
                })}
                <button onClick={n => this.addItem(this.state.items.length)}> click me</button>
            </section>
        );
    }
}

IndexComponent.defaultProps = {
    items: []
};

export default IndexComponent;
