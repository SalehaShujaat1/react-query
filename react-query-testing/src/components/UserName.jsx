import React from 'react'
import { useUserQuery } from '../hooks/useUsers';

export const UserName = () => {
    const {data} = useUserQuery();
  return (
    <div><h2>User Name: {data.name}</h2></div>
  )
}
