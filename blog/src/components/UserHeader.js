import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.user.find((user) => user.id == this.props.userId)

        if (!user) {
            return null;
        }

        return(
            <div className="header"> {user.id} </div>
        );
    };
};

// Give this component access to state that is set by the reducer.
const mapStateToProps = (state) => {
    return {user: state.user};
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);