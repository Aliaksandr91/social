import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../store/redux-store";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../store/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile: setUsersProfileAC})(WithUrlDataContainerComponent)

//
// Ребята, кто писал проект на react router v6, нужно использовать хуки, а не HOC шаблон. Но по скольку в курсе наша контейнерная компонента ProfileContainer - классовая компонента, то мы не можем использовать хуки в классвовых компонентах. Есть решение из оффициальной документации - создать функцию-обёртку, которая по принципу идентична к withRouter:import {
//     useLocation,
//     useNavigate,
//     useParams,
// } from "react-router-dom";
//
// // wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }
// И теперь, эту функцию нужно использовать👇
// export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
// Затем, в классе ProfileContainer мы можем получить айдишку пользователя, прописав:
// let profileId = this.props.router.params.profileId;
// И все, дальше меняем URL запроса, и обновляем данные профиля в зависимости от айди пользователя
//
