import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../store/store";
import { Navigate } from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";

export const Dialogs = (props: any) => {
    let state = props.dialogsPage
    const addNewMessage = (values:any)=> {
        props.sendMessage(values.newMessageBody)
    }

    let dialogsElements = state.dialogs.map((el: DialogType) => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesElements = state.messages.map((el: MessageType) => <Message key={el.id} message={el.message} id={el.id}/>);

    //if (!props.isAuth) return <Navigate to={'/login'}/>

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        )
}

type FormDataType = {
    newMessageBody:string
}
const maxLength100 = maxLengthCreator(100)
const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
                validate={[requiredField,maxLength100]}
            />
            <div>
                <button className={'btn'}>Send</button>
            </div>
        </form>

}
const AddMessageFormRedux = reduxForm<FormDataType>({
    form:'dialogAddMessageForm'
})(AddMessageForm)