import React from "react";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../store/redux-store";
import {connect} from "react-redux";
import {getStatusTC, getUsersProfileTC, updateStatusTC} from "../../store/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}





class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }

}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getUsersProfile: getUsersProfileTC, getStatus:getStatusTC,
    updateStatus: updateStatusTC}),
    withRouter,
    //withAuthRedirectComponent
)(ProfileContainer)

