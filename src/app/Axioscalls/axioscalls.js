import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class FetchDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios
            .get('http://api.population.io:80/1.0/population/2017/Brazil/')
            .then(res => {
                this.setState({posts: res.data});
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ul>
                    {this
                        .state
                        .posts
                        .map((post) => <li key={post.age}>
                            {post.year}
                        </li>)}
                </ul>
            </div>
        );
    }
}
