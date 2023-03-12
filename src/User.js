import React from 'react'

const User = ({data}) => {
  return (
    <div>
      <h1>User Component {data.name} {data.surname}</h1>
    </div>
  )
}

export default User
