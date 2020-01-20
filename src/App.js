import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import API from './Config/apicall';

import Search from './Components/Seach';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList';

class App extends React.Component {
  constructor(props){
    super(props)  
    this.state = {
      display: false,
      iFrame: false,
      loading: true,
    }
    this.repsonse = false;
  }

/*   componentDidMount(){
    this.searchVideo('cats');
  } */
  
  searchVideo = async search => {
    const response = await API.get('/search', {
      params:{
        q: search
      }
    })

    this.response = response;

    let resp = this.response.data.items;
    const display = [];
        if (this.response){
        resp.map(el => {
          display.push({
            vidId: el.id.videoId,
            title: el.snippet.title,
            description: el.snippet.description,
            thumbnail: el.snippet.thumbnails.medium.url,         
          })
        });
      }
    this.setState({
      display: display,
    })  

  };

  getVideoDisplay = (videoID, title, description) => {
    this.setState({
      iFrame: videoID,
      playTitle: title,
      playDescription: description,
      loading: false,
    })
   
  }

  render(){
    return (
        <div className="App container">
          <Search searchVideo={this.searchVideo} />
          <div className="row p-3">
            <VideoDetail iFrame={this.state.iFrame} playTitle={this.state.playTitle} playDescription={this.state.playDescription} loading={this.state.loading} />
            {this.state.display && <VideoList getVideoDisplay={this.getVideoDisplay} display={this.state.display} loading={this.state.loading} />}
          </div>
        </div>
      );
  }
  
}

export default App;
