import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();

        // If we did not bind here or left this function as a regular function
        // and not an arrow function then here the interpreter has no idea what
        // `this` refers to. Which results in undefined.props.onSubmit(undefined.state.term).
        // However, when we turn the onSubmit() handler at the bottom into an arrow function
        // an arrow function looks up the chain to see the immediate enclosing class, in this case
        // SearchBar. Then we have SearchBar.props.onSubmit(SearchBar.state.term).
        this.props.onSubmit(this.state.term)
    }

    // Arrow functions do not have a `this`, which means any usage of `this` inside an arrow function is just like any other variable, and is looked up lexically through parent scopes until a `this` is found.

    /*
     *  1) If a function is called using an object like obj.functionName() then this will always return a reference to an object
     *  2) If a function is called as a stand-alone function like functonName() then this will return a reference to window object (by default)BUT if strict mode is enabled, then this will return undefined.
     */
    

    // render
    render() {
        return (
            <div className="ui segment">
                {/* Here we are also binding this to the immediate parent component which is SearchBar */}
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label> Image Search </label>
                        <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value})}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;