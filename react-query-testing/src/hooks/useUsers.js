// put whole logic about manipulating user's data in this file

import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4');
    return await response.json()
}

export const useUserQuery = () => useQuery(["user"], fetchUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false})

const updateForm = async (userName) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4', {
        method: 'PATCH',
        body: JSON.stringify({
            name: userName,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    return await response.json();
}

export const useUpdateUserMutation = () => {

    const queryClient = useQueryClient();
    return useMutation(updateForm, {onSuccess: (newUser) => {
        queryClient.setQueryData(['user'], newUser)
    }})
}