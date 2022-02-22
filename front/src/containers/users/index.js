import React from 'react';

import Users from "../../components/users"
import { getUsers } from "./api/crud"
import { useQuery } from "react-query";


const UsersContainer = () => {
    const {isFetching, data} = useQuery('users', () => getUsers());
    const users = data?.data || [];
    return (
        <div>
            {isFetching && <div>Loading...</div>}
            <Users users={users}/>
        </div>
    );
}

export default UsersContainer;