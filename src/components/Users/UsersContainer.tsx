import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setLoaderAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../store/users-reducer";
import React from "react";
import axios from 'axios';
import {Users} from "./Users";
import { Loader } from "../Loader/Loader";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setLoader: (loading: boolean) => void

}


class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setLoader(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setLoader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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

export default connect(mapStateToProps,{
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setLoader:setLoaderAC
})(UsersContainer)
