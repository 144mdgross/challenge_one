import React, { Component } from 'react';
import $ from 'jquery';

class Random extends Component {
  constructor() {
    super()
    this.state = {
      gif: null,
      loading: true
    }
  }

  componentDidMount() {
    $.ajax({
       method:'get',
       url: `/api/random`,
       dataType: 'json',
       success: (result) => {
         console.log('result', result);
         this.setState({ gif: result.gif.media[0].gif.url });
         console.log(this.state.gif);
         this.setState({ loading: false })
       },
       error: function(err) {
         console.log(err);
       }
   })
 }

  render() {
    if(this.state.loading) {
        return <div className="loader">...Loading</div>
      }

    return (
      <div className="text-center">
        <img src={this.state.gif} />
      </div>
    )
  }
}

export default Random;
