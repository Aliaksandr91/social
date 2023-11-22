import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./store/app-reducer";
import {AppRootStateType} from "./store/redux-store";


class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {
        if (this.props.initialized)
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile/:userId?"
                                   element={<ProfileContainer/>}
                            />
                            <Route path="/dialogs/*"
                                   element={
                                       <DialogsContainer/>
                                   }
                            />
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state:AppRootStateType) => ({
    initialized: state.app.isInitialized
})
export default connect(mapStateToProps, {initializeAppTC})(App)
//export default withRouter(connect(null, {getAuthUserData: getAuthUserDataTC, logout:logoutTC})(App))
// export default compose(
//     withRouter,
//     connect(null, {getAuthUserData: getAuthUserDataTC})
// )(App)
