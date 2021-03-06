import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';
import { SignInButton } from './signInButton';
import { PersonalPizza } from './piza.js'
import Toggle from './footer.js'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import img from './images/background-plant.png';
import logo from './images/logo.png'

export class ProfilePage extends React.Component {
      componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
    render(){

        return (
            <div>
                <div className="logo">
                    <img src={ logo }/>
                    { this.props.message }
                </div>
                <NavBar/>
                <div className="welcome">
                    <SignInButton/>

                </div>
                <br/><br/><br/>
                <content>
                    <h1>Avocado life</h1>
                    <p>That is the page about different plants.</p>

                    <article>
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                       </p>
                        <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                         <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </article>

                    {/*<img className="background-img" src={ img } />*/}

                <PersonalPizza/>
                </content>
                <footer>
                    <div>Column1</div>
                    <div>Column2</div>
                    <div>
                        <div>Enable dark mode on all websites:</div>
                        <Toggle/>
                    </div>

                </footer>
                    <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
            </div>
        );
    }
}
