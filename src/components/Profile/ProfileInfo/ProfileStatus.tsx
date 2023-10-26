import React, {ChangeEvent, Component} from "react";

export class ProfileStatus extends Component<any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange(e:ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{
                            this.props.status || '---'
                        }</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange.bind(this)}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}