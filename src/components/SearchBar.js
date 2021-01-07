import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    render(){
        return(
            <div className="search-bar ui segment">
                <div className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchBar;