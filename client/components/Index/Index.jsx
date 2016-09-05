import React, { Component } from 'react';

class IndexComponent extends Component {

    constructor(props){
        super(props);
        console.log('test');
        let items = [1,2,3,5,6];
        this.state = {items};
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
                <ul ref="indexList" className="index-list">
                    {this.state.items.map((item, index) => {
                        return (<li key={index}>item {item}</li>);
                    })}
                </ul>
            </section>
        );
    }
}

IndexComponent.defaultProps = {
    items: []
};

export default IndexComponent;
