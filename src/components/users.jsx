import React from 'react'
import axios from 'axios'
export default class Users extends React.Component {
constructor(props){
  super(props)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.state={info: null}
}
componentDidMount(){
  this.setState({info: ['a', 'b', 'c', 'd']})
}

handleSubmit(e){
  e.preventDefault()
    axios.get('/realtime/reactshow?getRtJson=true')
    .then(res => {
      this.setState({info: res.data});
      this.forceUpdate()
      console.log(res.data)
    })
    .catch(err => console.log(err))
};

<<<<<<< HEAD
  render() {
    return (<div className="Userhome">

        {
          this.info
            ? this.info.map(int => {
              return (<p>
                {int}
              </p>)
            })
            : null
        }

      <form className="usersForm" action="#" method="POST" onSubmit={this.handleSubmit}>
        <div className="FormContainer">
=======
  render(){
    return(
      <div className="Userhome">
        <ul>
          {this.info ?
           this.info.map(int => {
              return(
                <li>
                  {int}
                </li>
              )
            })
            : null}
        </ul>
        <form className="usersForm" action="#"   method="POST" onSubmit={this.handleSubmit}>
          <div className="FormContainer">

            <p>Please use this form to change user settings.</p>

>>>>>>> parent of 9f956fc... realtime update

            <p><label><b> ID Number  </b></label>

            <input type="num" placeholder="Enter ID#" name="id" required></input></p>

            <p><label><b> First Name  </b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required></input></p>

            <p><label><b> Last Name  </b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required></input></p>



            <div className="btn-group">
              <button type="submit" >Create User (POST)</button>
              <button type="button" >Update User aka (PUT)</button>
              <button type="button" >Delete User</button>
              <button type="button" >Cancel</button>
            </div>
            <br></br>
          </div>
        </form>
      </div>

    )
  }
}
