import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

import img from './images/background-plant.png';

export class ProfilePage extends React.Component {
    render(){
        return (
            <div>
                <NavBar/>
                <h1>Avocado life</h1>
                <p>That is the page about different plants</p>
                <img className="background-img" src={img} />
            </div>
        );
    }
}

// ReactDOM.render(<ProfilePage/>, document.getElementById('app'));