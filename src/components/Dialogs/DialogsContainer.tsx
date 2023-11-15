import {sendMessageAC} from "../../store/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import React from "react";


type mapDispatchToPropsType = {
    sendMessage: (value:string) => void
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)
