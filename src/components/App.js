import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIs/Youtube';

const KEY='AIzaSyAuWKnJQYYwzE5ZP-5Wdp6OpNCOs-NOyg0';

class App extends React.Component{
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
        console.log(response);
    };
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;