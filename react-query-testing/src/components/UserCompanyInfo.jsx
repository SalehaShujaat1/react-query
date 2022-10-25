import React from 'react'
import { useUserQuery } from '../hooks/useUsers'

const UserCompanyInfo = () => {
    const {data} = useUserQuery()

  return (
    <>
    <h2>{`User Company: ${data.company.name} -  ${data.company.catchPhrase}`}</h2>
    </>
  )
}

export default UserCompanyInfo