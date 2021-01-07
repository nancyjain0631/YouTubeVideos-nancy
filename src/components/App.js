import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIs/Youtube';

const KEY="AIzaSyAuWKnJQYYwzE5ZP-5Wdp6OpNCOs-NOyg0";

class App extends React.Component{
    onTermSubmit=term =>{
        Youtube.get("/search",{
            params:{
                q:term,
                part:"snippet",
                maxResults:5,
                key:KEY
            }
        });
    }
    render(){
        return (
        <div><SearchBar/></div>
        );
    }
}

export default App;