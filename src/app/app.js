import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import FetchDemo from './Axioscalls/axioscalls';
import Home from './Pages/Home';
import Counter from './CounterComponent/counter';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/layout">Layout</Link>
                    </li>
                    <li>
                        <Link to="/fetchdemo">FetchData</Link>
                    </li>
                    <li>
                        <Link to="/countercomponent">Counter</Link>
                    </li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/src" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/layout" component={Layout}/>
            <Route path="/fetchdemo" component={FetchDemo}/>
            <Route path="/countercomponent" component={Counter}/>
        </Route>
    </Router>

), document.getElementById('root'));
