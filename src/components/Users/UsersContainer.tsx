import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../store/users-reducer";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        } ,
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
