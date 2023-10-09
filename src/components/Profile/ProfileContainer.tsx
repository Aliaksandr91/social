import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../store/redux-store";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../store/profile-reducer";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUsersProfile: setUsersProfileAC})(ProfileContainer)