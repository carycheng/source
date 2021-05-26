import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;  

        if (!user) {
            return null;
        }

        return(
            <div className="header"> {user.name} </div>
        );
    };
};

// Give this component access to state that is set by the reducer.
// ownProps allows us to retrieve props passed into this component from a parent component.
const mapStateToProps = ( state, ownProps ) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);