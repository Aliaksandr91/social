import {userType} from "../../store/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/profile-photo.png'

export const Users = (props: any) => {
    if (props.users.length !== 0) {
        //props.setUsers()
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {
                props.users.map((user: userType) => <div className={styles.userContainer} key={user.id}>
                    <div className={styles.userMain}>
                        <div><img src={user.photoUrl} className={styles.userPhoto} alt=""/></div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.userDescription}>
                        <div className={styles.userText}>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={styles.userLoc}>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>

                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}