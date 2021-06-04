import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
};

// Pass info from redux store (reducer) to Component.
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

// All functions added to the second parameter is wrapped by the Connect function.
// Anything a function that is registered with connect like selectSong is wrapped
// and whenever it is called the dispatch() function is also called.
// store.dispatch(selectSong(song)) and the store is updated, otherwise you are
// just calling a pure javascript function.
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);