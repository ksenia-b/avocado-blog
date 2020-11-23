import React from 'react';

export class Welcome extends React.Component {s
  render() {
    if (this.props.name === 'Oksana' || this.props.signedIn === true) {
      return (
      	<h2>
      	  hello sir {this.props.name} it is truly great to meet you here!!!
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME {this.props.name }!
            <br/>
          Are you allowed to reach to the site???!!!!!
      	</h2>
      );
    }
  }
}