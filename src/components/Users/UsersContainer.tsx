import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setLoaderAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../store/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Loader} from "../Loader/Loader";
import {usersAPI} from "../../api";


class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setLoader(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setLoader(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setLoader(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setLoader(false)
            })
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
            />
        </>

    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setLoader: setLoaderAC
})(UsersContainer)
