import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../store/redux-store";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../store/profile-reducer";

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component:any) {
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
        console.log(this.props)
        let userId = this.props.router.params.userId
        if (!userId) userId = 2
        //this.props.setLoader(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUsersProfile(response.data)
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
export default connect(mapStateToProps, {setUsersProfile: setUsersProfileAC})(withRouter(ProfileContainer));
