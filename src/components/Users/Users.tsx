import React from "react";
import styles from "./users.module.css";
import { UserType } from "../../store/users-reducer";
import userPhoto from "../../assets/images/profile-photo.png";

export const Users = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const currentPage = props.currentPage;
    const pagesToShow = 5; // Количество отображаемых страниц
    const halfPagesToShow = Math.floor(pagesToShow / 2);

    // Вычисляем диапазон страниц, который нужно отобразить
    let startPage = Math.max(currentPage - halfPagesToShow, 1);
    let endPage = Math.min(currentPage + halfPagesToShow, pagesCount);

    // Если диапазон страниц меньше pagesToShow, сдвигаем его
    if (endPage - startPage + 1 < pagesToShow) {
        if (currentPage <= halfPagesToShow) {
            endPage = pagesToShow;
        } else if (currentPage >= pagesCount - halfPagesToShow) {
            startPage = pagesCount - pagesToShow + 1;
        }
    }

    let pages = [];

    // Добавляем кнопку "1" и троеточие, если текущая страница не начальная
    if (startPage > 1) {
        pages.push(
            <span key={1} onClick={() => props.onPageChanged(1)}>{1}</span>,
            <span key="ellipsis1">...</span>
        );
    }

    // Добавляем отображаемые страницы
    for (let i = startPage; i <= endPage; i++) {
        const isSelected = currentPage === i;
        pages.push(
            <span key={i} className={isSelected ? styles.selectedPage : ''} onClick={() => props.onPageChanged(i)}>{i}</span>
        );
    }

    // Добавляем троеточие и последние страницы, если текущая страница не конечная
    if (endPage < pagesCount) {
        pages.push(
            <span key="ellipsis2">...</span>,
            <span key={pagesCount} onClick={() => props.onPageChanged(pagesCount)}>{pagesCount}</span>
        );
    }

    return (
        <div>
            {
                props.users.map((user: UserType) => (
                    <div className={styles.userContainer} key={user.id}>
                        <div className={styles.userMain}>
                            <div>
                                <img
                                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                                    className={styles.userPhoto}
                                    alt=""
                                />
                            </div>
                            <div>
                                {user.followed ? (
                                    <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                ) : (
                                    <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                )}
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
                    </div>
                ))
            }
            <div className={styles.PagesWrapper}>
                {pages.map((page) => page)}
            </div>
        </div>
    );
};
