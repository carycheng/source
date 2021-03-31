import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    // Previously when this was not an arrow function and just a regular function,
    // regular functions do not have a sense of `this`. So when this.setState() was
    // invoked the this was undefined resulting in a failed function call because
    // we were essentially calling undefined.setState(). By using binding an turning
    // this function into an arrow function the arrow function allows us to look up
    // the chain and see the immediate parent class in this case App so we can then
    // call App.setState({images});
    onSearchSubmit = async (term) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
            Authorization:
                'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
            },
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}


export default App;