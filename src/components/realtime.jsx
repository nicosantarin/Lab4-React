import React from 'react'
import axios from 'axios'
export default class Realtime extends React.Component {

  constructor() {
    super();
    this.state = {
      realtimeData: null
    }
  }

  componentWillMount() {
    axios.get('./src/realtimeDB.JSON'). //JSON file path
    then(response => {
      this.setState({realtimeData: response.data});
      this.forceUpdate()
    }).catch(function(e) {
      console.log(e);
    });
  }

  render() {
    const realtimeData = this.state.realtimeData;
    let rtDatablock = '';

    if (realtimeData.length > 0) {
      rtDatablock = realtimeData.map(obj => {

        return (

              datavalue = {obj}

        )
      })

    }
  }

  return (
    <div>
    <h1>Real Time Data Update Page</h1>
    {rtDatablock}
  </div>)
}
