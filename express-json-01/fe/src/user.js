import React from 'react';

export default class User extends React.Component {
    constructor (props) {
        super(props);
        this.state = { users: [], searchField: '' };
    }

    search () {
        let self = this;
        this.props.axios.get('./users', {
            params: {
               busca: this.state.searchField
            }
        }).then((response) => {
            self.setState({
                users: response.data
            });
        });
    }

    change (ev) {
        this.setState({ searchField: ev.target.value });
    }

    render () {
        return (
            <div className="users">
                <label htmlFor="search">Search: </label>
                <input type="text" name="search" value={this.state.searchField}
                        onChange={this.change.bind(this)} />
                <button onClick={this.search.bind(this)}>Go!</button>
                <ul>
                { this.state.users.map((user) => {
                    return (
                        <li>{user.nome}</li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

