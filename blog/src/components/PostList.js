import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

class PostList extends React.Component {
    render() {
        return <div className="ui container">Post List</div>
    };
};

export default connect(null, { fetchPosts: fetchPosts })(PostList);