import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={ stream.id }>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`}>
                            { stream.title }
                        </Link>
                        <div className="description">
                            { stream.description } 
                        </div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            );
        });
    };
    
    /***
     * There is a difference between this.renderPosts()  and this.renderPosts  . this  is the context in which you are executing a function. The first one invokes the function immediately and assigns the values returned from renderPosts()  function. In this, the this  will refer to the component which has the props attribute. In this case a list of blog titles will be returned. 

       But when we do a renderPosts  , we are binding a function that will be invoked later during a click event in browser. Thus the context in which the function executes will be browser object which is global or window . The this.props is not available in window  object, which is why we need to bind our component to the renderPosts in this case to make our props available when the function will execute later.
     */
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                   <Link to="/streams/new" className="ui button primary">
                        Create Stream
                   </Link> 
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>
                    <div className="ui celled list">
                        { this.renderList() }
                    </div>
                </h2>
                {this.renderCreate()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);