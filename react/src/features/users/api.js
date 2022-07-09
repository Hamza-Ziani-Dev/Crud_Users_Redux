import { errorUsers, loadingUsers, successUsers } from "./usersSlice";

// get Add User
export const addUser = async(users, dispatch) => {
    dispatch(loadingUsers);
    try {
        const res = await fetch('http://localhost:3005/users');
        const data = await res.json();
        return dispatch(successUsers(data));
    } catch (error) {
        dispatch(errorUsers)
    }
};