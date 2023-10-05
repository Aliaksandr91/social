import React from "react";
import {UserType} from "../../store/users-reducer";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/profile-photo.png'
export class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {
                this.props.users.map((user: UserType) => <div className={styles.userContainer} key={user.id}>
                    <div className={styles.userMain}>
                        <div><img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt=""/></div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.userDescription}>
                        <div className={styles.userText}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={styles.userLoc}>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    }
}

