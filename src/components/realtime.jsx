import React from 'react'
import axios from 'axios'

//import rtDisplay component
export default class Realtime extends React.Component {

<<<<<<< HEAD
<<<<<<< HEAD

  constructor() {
    super();
    this.state = {
      realtimeData: null
    }
  }

  componentWillMount() {
    axios.get('/src/realtimeDB.JSON'). //JSON file path
    then(response => {
      this.setState({realtimeData: response.data});
    }).catch(function(e) {
      console.log(e);
=======

=======

>>>>>>> parent of 9f956fc... realtime update
  axios.get('/realtime/reactshow??getRtJson=true')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
<<<<<<< HEAD
>>>>>>> parent of 9f956fc... realtime update
    });

<<<<<<< HEAD
  render() {
<<<<<<< HEAD
=======
    const realtimeData = this.state.realtimeData;
    let rtDatablock = '';

    if (realtimeData.length > 0) {
      rtDatablock = realtimeData.map(obj => {

        return (

              <DataCard datavalue = {obj}/>
>>>>>>> parent of 63c0c6d... slight edit

    // const realtimeData = this.state.realtimeData;
    // let rtDatablock = '';
    //
    // if (realtimeData.length > 0) {
    //   //rtDatablock += realtimeData
    //   //the JSON
    //   //realtimeData.forEach(info => rtDatablock += info.toString())
    // }
    return (<div>
      <h1>Real Time Data Update Page</h1>
      <ul>
          {Object.keys(realtimeData).map(info => {
              <li>
                 <RtDisplay data={info} />
              </li>
          })}
      </ul>
  </div>)
  }
=======

=======
    });


>>>>>>> parent of 9f956fc... realtime update
  return(
    <div className='Home'>
<h1>Real Time Data Update Page</h1>
    </div>
  )
<<<<<<< HEAD
>>>>>>> parent of 9f956fc... realtime update
=======
>>>>>>> parent of 9f956fc... realtime update
}
