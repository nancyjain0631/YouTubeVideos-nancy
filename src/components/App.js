import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIs/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY='AIzaSyAuWKnJQYYwzE5ZP-5Wdp6OpNCOs-NOyg0';

class App extends React.Component{
    state={videos: [] , selectedVideo : null};
    onTermSubmit = async term => {
        
        const response= await Youtube.get('/search',{
            params:{
                q:term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            },
        });
        this.setState({videos: response.data.items});
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    };
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect= {this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;