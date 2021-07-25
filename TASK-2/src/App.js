import Users from "./Components/card";
import './App.css';
import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[],
                loading : true                
  }
	this.displayUsers = this.displayUsers.bind(this)
  }
    
  displayUsers(){
      document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav className="navbar navbar-expand-lg navbar-light rounded m-3">
          <div className="container-fluid">
            <h3>LetsGrowMore</h3>
            <h3>Virtual Internship Program [TASK-2]</h3>
            <button onClick={this.displayUsers}>Fetch Users Data</button>
          </div>
        </nav>
      <Users loading={this.state.loading} users={this.state.users_data}/>
    </>
    )
  }
}
	
export default App;