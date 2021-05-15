import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

// ComponentDidMount is similar to useEffect()
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div className="ui container">Post List</div>
    };
};

// Look in reducers - combinesReducers to see what the variable state is stored in.
const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);