// users can edit their names

import React, { useState } from 'react'
import { useUpdateUserMutation, useUserQuery } from '../hooks/useUsers';

const UserNameForm = () => {
    const { data } = useUserQuery();
    const [userName, setUserName ] = useState(data.name);
     
    const userNameMutation = useUpdateUserMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userName",userName);
        userNameMutation.mutate(userName)
    }

    return (
        // <>
        // <div>UserNameForm</div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        // </>
    )
}

export default UserNameForm