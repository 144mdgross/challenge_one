import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      gifs: null
    }
  }

  componentDidMount() {
    $.ajax({
       method:'get',
       url: `/api/gifs`,
       dataType: 'json',
       success: (result) => {
         console.log('result', result);
         this.setState({ gifs: result });
       },
       error: function(err) {
         console.log(err);
       }
   })
 }

  render() {
    return (
      <div>
        <h1> Welcome Home </h1>
      </div>
    )
  }
}

export default Home;
