import React from 'react'
const Users = ({loading,users}) => {
    return loading ? (
          <div id="main">
            <img src="https://lh4.googleusercontent.com/proxy/tfa-w80LVQvhS6F1hAmT2-Owz6qL9y-C3pZDqag4m9qYvc0ydhQyynWSFa6EJWH1ISjDdXe3fv6Ssh-KrpLXCH4p9ACzHH2il9DK8Uh_FZ0jIX-K3LR0JdU9SeOEBe_dCgYwVYeGcEixhJsLRJfqf2afQn_PrLDgRfEO0oRJqZY=s0-d" alt="Loading..." className="loader"/>
          </div>
        ) :
        (
          <div className='row' id="main">  
          {users.map(user =>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <p>ID: {user.id}</p>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users