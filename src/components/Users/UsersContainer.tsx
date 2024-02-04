import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {
    followTC, getUsersTC,
    setCurrentPageAC,
    toggleFollowingProgressAC, unfollowTC, UserType
} from "../../store/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Loader} from "../common/Loader/Loader";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../store/users-selectors";

type MapStateToPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
};

type MapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setCurrentPage: (pageNumber: number) => void;
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props
        getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {getUsers, pageSize} = this.props
        getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followTC,
        unfollow: unfollowTC,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsers: getUsersTC
    }),
    withAuthRedirectComponent
)(UsersContainer)