import React, { Component } from 'react';
import $ from 'jquery';


class Random extends Component {
  constructor() {
    super()
    this.state = {
      gif: null
    }
  }

  componentDidMount() {
    $.ajax({
       method:'get',
       url: `/api/random`,
       dataType: 'json',
       success: (result) => {
         console.log('result', result);
         this.setState({ gif: result.gif.url });
         console.log(this.state.gif);
       },
       error: function(err) {
         console.log(err);
       }
   })
 }

  render() {
    return (
      <div>
        <h1> Welcome Random </h1>
      </div>
    )
  }
}

export default Random;
