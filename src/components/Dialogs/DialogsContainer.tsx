import {sendMessageAC, updateNewMessageBodyAC} from "../../store/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../store/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";


type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
let AuthRedirectComponent = withAuthRedirectComponent(Dialogs)
const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)