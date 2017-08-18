import React, { Component } from 'react';
import Pagination from 'react-js-pagination'
import $ from 'jquery';
import '../main.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: null,
      content1: [],
      content2: [],
      loading: true,
      pageItems: 10,
      activePage: 1
    }
  }

  componentDidMount() {
    // declare arrays here to avoid altering state outside of this.setState()
    let content1 = []
    let content2 = []

    $.ajax({
       method:'get',
       url: `/api/gifs`,
       dataType: 'json',
       success: (result) => {

         for (let i = 0; i < result.gifs.length; i++) {
           if(i < this.state.pageItems) {
             content1.push(<img key={i} src={result.gifs[i].media[0].gif.url} alt={result.gifs[i].title}/>)
           } else {
             content2.push(<img key={i} src={result.gifs[i].media[0].gif.url} alt={result.gifs[i].title}/>)
           }
          }
          // set state in success to have access to result object in success function
          this.setState({ content1, content2, gifs: result.gifs, loading: false })
       },
       error: function(err) {
         console.log(err);
       }
   })
 }

   handePageChange(pageNumber) {
     this.setState({ activePage: pageNumber })
   }

  render() {
    if(this.state.loading) {
      return <div className="loader">...Loading</div>
    }

    return (
      <div className="text-center">
        {this.state.activePage === 1 ? <div> {this.state.content1} </div> : <div> {this.state.content2} </div>}

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.pageItems}
          totalItemsCount={this.state.gifs.length}
          pageRangeDisplayed={5}
          onChange={this.handePageChange.bind(this)} />
      </div>
    )
  }
}

export default Home;
