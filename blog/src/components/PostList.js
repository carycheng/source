import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions/index';
import UserHeader from './UserHeader';

// ComponentDidMount is similar to useEffect()
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    //list renderer
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{ this.renderList() }</div>
    };
};

// Look in reducers - combinesReducers to see what the variable state is stored in.
const mapStateToProps = (state) => {
    return {posts: state.posts};
}

// Connect function provides access to Provider component
export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);