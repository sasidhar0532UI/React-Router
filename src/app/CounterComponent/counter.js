import React from 'react';
import {createStore} from 'redux';

function rootReducer(state = [], action) {
    switch (action.type) {
        case 'ADD-ONE':
            return state.concat([action.payload])
        case 'SUBTRACT-ONE':
            return state.concat([action.payload])
        default:
            return state
    }
}
let store = createStore(rootReducer);

export default class Counter extends React.Component {
    constructor() {
        super()
        store.subscribe(() => {
            const mystate = store.getState();
            console.log(mystate);
        })
    }
    increment() {
        console.log('in increment method')
        store.dispatch({type: 'ADD-ONE', payload: 'added-one'});
    }
    decrement() {
        console.log('in decrement method')
        store.dispatch({type: 'SUBTRACT-ONE', payload: 'subtract-one'});
    }
    render() {
        return (
            <div>
                <h1>{this.props.mystate}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
