import styles from "./users.module.css";
import {UserType} from "../../store/users-reducer";
import userPhoto from "../../assets/images/profile-photo.png";
import React from "react";

export const Users = (props:any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map((page) => {
                const isSelected = props.currentPage === page && props.currentPage !== false;
                return <span className={isSelected ? styles.selectedPage + styles.pages : styles.pages} onClick={() => {
                    props.onPageChanged(page)
                }}>{page}</span>
            })}

        </div>
        {
            props.users.map((user: UserType) => <div className={styles.userContainer} key={user.id}>
                <div className={styles.userMain}>
                    <div><img src={user.photos.small !== null ? user.photos.small : userPhoto}
                              className={styles.userPhoto} alt=""/></div>
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