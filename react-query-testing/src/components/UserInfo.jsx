// component to show basic info about users such as names or address

import React, { useState } from 'react'
import { useUserQuery } from '../hooks/useUsers';
import UserCompanyInfo from './UserCompanyInfo';
import { UserName } from './UserName';
import UserNameForm from './UserNameForm';

const UserInfo = () => {
  const {isLoading, isError, data} = useUserQuery();
  const [showCompanyStatus, setCompanyStatus] = useState(true);

  if(isLoading) {
    return <div>loading...</div>
  } else if(isError) {
    return <div>error...</div>
  }

  return (
    <div>
      <UserName/>
      {showCompanyStatus && <UserCompanyInfo/>}
      <button onClick={() => setCompanyStatus(!showCompanyStatus)}>{showCompanyStatus ? 'hide' : 'show'}</button>
      <UserNameForm/>
    </div>
  )
}

export default UserInfo;