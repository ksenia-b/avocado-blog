import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

class ProfilePage extends React.Component {
    render(){
        return (
            <div>
                <NavBar/>
                <h1>Avocado life</h1>
                <p>That is the page about different plants</p>
                <img src="../images/background-pland.png" />
            </div>
        );
    }
}

ReactDOM.render(<ProfilePage/>, document.getElementById('app'));