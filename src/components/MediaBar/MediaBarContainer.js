import { connect } from "react-redux";
import MediaBar from "./MediaBar";
import { fetchPosts } from "../../actions/fetch";

function mapStateToProps(state) {
    return {
        filteredPosts: state.postsState.items,
        isFetching: state.postsState.isFetching,
        fetchLogs: state.postsState.fetchLogs,
        settings: state.settingsState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        fetchMore: (tag, sort, after) => dispatch(fetchPosts(tag, sort, after))
    };
}

const MediaBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaBar);

export default MediaBarContainer;