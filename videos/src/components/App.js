import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    onTermSubmit = async (term) => {
        console.log(term);

        const results = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(results);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;