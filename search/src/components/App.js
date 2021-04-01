import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // Previously when this was not an arrow function and just a regular function,
    // regular functions do not have a sense of `this`. So when this.setState() was
    // invoked the this was undefined resulting in a failed function call because
    // we were essentially calling undefined.setState(). By using binding an turning
    // this function into an arrow function the arrow function allows us to look up
    // the chain and see the immediate parent class in this case App so we can then
    // call App.setState({images})
    onSearchSubmit = async (term) =>{

        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}


export default App;