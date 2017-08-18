import React from 'react';

class Profile extends React.Component {

	constructor(props) {
    	super(props);

    	//var profile = {};

    	this.state = {
    		profilePic: '',
    		name: '',
    		location: '',
    		hobbies: '',
    		aboutme: ''
    	}
	}

 componentDidMount () {
    $.ajax({
      url: '/profile',
      method: 'GET',
      success: ( data ) => {
        var data = JSON.parse(data);
        this.setState ({
        	profilePic: 'https://s-media-cache-ak0.pinimg.com/originals/36/43/e7/3643e7e8dab9b88b3972ee1c9f909dea.jpg',
        	name: 'Fiona',
        	location: 'San Francisco',
        	hobbies: 'doing things',
        	aboutme: 'I like doing things'
        });
      },
      error: ( error ) => {
        //debug
        console.log( 'ERROR: ', error );
      }
    });
  }

  render () {
    return (
    <div className="container">

			  <img className="img-circle" src={this.state.profilePic}></img>

        <div className="col-xs-6 center-text">
    	    <h1>{this.state.name}'s Zone</h1>
    	    <br />
    			<strong>Location: &nbsp;</strong>{this.state.location}
					<br />
          <strong>Hobbies/Interests:&nbsp; </strong>{this.state.hobbies}
          <br />
          <strong>About Me:&nbsp; </strong>{this.state.aboutme}
          <br />
          <button className="message-button"><img src="logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>Send {this.state.name} a message!</button>
        </div>
    </div>
    );
  }
}

export default Profile