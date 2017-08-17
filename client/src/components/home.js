import React, { Component } from 'react';
import Pagination from 'react-js-pagination'
import $ from 'jquery';
import '../main.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      content1: [],
      content2: [],
      loading: true,
      pageItems: 10,
      activePage: 1
    }
  }

  componentDidMount() {
    console.log('componentDidMount called');
    $.ajax({
       method:'get',
       url: `/api/gifs`,
       dataType: 'json',
       success: (result) => {
         console.log('result', result.gifs);
         this.setState({ gifs: result.gifs });
         for (let i = 0; i < result.gifs.length; i++) {
           if(i < this.state.pageItems) {
             this.state.content1.push(<img key={i} src={this.state.gifs[i].media[0].gif.url}/>)

           } else {
             this.state.content2.push(<img key={i} src={this.state.gifs[i].media[0].gif.url}/>)
           }
          }
          this.setState({loading: false})
       },
       error: function(err) {
         console.log(err);
       }
   })
 }

 handePageChange(pageNumber) {
   this.setState({content: [], loading: true, activePage: pageNumber, start: 10, display: this.state.display + this.state.pageItems })
   console.log('content after set state before second loop', this.state.content);
   for (let i = this.state.start; i <= this.state.display; i++) {
     console.log('i in loop in page change', i);
     this.state.content.push(<img key={i} src={this.state.gifs[i].media[0].gif.url}/>)
   }
   console.log('content after loop', this.state.content);
   this.setState({ loading: false })

 }

 componentWillUpdate() {
   console.log('componentWillUpdate');
   console.log('content in willUpdate', this.state.content);
 }

 componentDidUpdate() {
   console.log('componentDidUpdate');
   console.log('content in didUpdate', this.state.content);
 }

  render() {

    if(this.state.loading) {
      return <div className="loader">...Loading</div>
    }

    return (
      <div>
        <h1> Welcome Home </h1>
        {this.state.activePage == 1 ? <div> {this.state.content1} </div> : <div> {this.state.content2} </div>}


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
