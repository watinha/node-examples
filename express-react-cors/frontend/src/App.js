import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { users: [] };
    }

    load () {
        let self = this;
        axios.get('http://localhost:3000/users.json')
             .then((response) => {
                self.setState((state) => ({
                    users: response.data
                }));
             });
    }

    render () {
        return (
        <div className="cors_example">
            <h1>Users list</h1>
            <button onClick={this.load.bind(this)}>load</button>
            <ul>
            {this.state.users.map((user, index) => {
                return (<li key={'user_' + index}>{user.nome}</li>)
            })}
            </ul>
        </div>
        );
    }
}

export default App;
