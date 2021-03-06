import React from 'react';
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div className={s.commonBlockUsers}>
            <Pagination currentPage={props.currentPage}
                        arrCountPage={props.arrCountPage}
                        countPagePart={props.countPagePart}
                        partSize={props.pageSize}
                        onChangePage={props.onChangePage}/>
            <User users={props.users}
                  followUnfollowUser={props.followUnfollowUser}
                  subscribedUsers={props.subscribedUsers}/>
        </div>
    )
}

export default Users;
