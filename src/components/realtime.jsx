import React from 'react'
import axios from 'axios'

//import rtDisplay component
export default class Realtime extends React.Component {


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
    });
  }

  render() {

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
}
