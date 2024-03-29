import React, {ChangeEvent, useEffect, useState} from "react";
type ProfileStatusType = {
    status: string;
    updateStatus: (value: string) => void;
};
export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const deactivateEditMode=()=> {
        setEditMode(false)
        props.updateStatus(status)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{status || '---'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}
