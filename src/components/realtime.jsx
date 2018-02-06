import React from 'react'
<<<<<<< HEAD
import axios from 'axios'
<<<<<<< HEAD

//import rtDisplay component
export default class Realtime extends React.Component {
  render() {
=======
export default function Realtime(props) {
>>>>>>> parent of 581e3c3... adjusted some code
=======
export default class Realtime extends React.Component {


  axios.get('/realtime/reactshow??getRtJson=true')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


>>>>>>> parent of 9f956fc... realtime update
  return(
    <div className='Home'>
<h1>Real Time Data Update Page</h1>
    </div>
  )
<<<<<<< HEAD

}
=======
>>>>>>> parent of 9f956fc... realtime update
}
