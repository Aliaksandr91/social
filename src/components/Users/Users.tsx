import {userType} from "../../store/users-reducer";
import styles from './users.module.css'

export const Users = (props: any) => {
    if (props.users.length === 0) {
        //props.setUsers()
    }
    return (
        <div>
            {
                props.users.map((user: userType) => <div key={user.id}>
                    <div>
                        <div><img src={user.photoUrl} className={styles.userPhoto} alt=""/></div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>

                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}