import {useState} from 'react';

const Users = () => {
    const[users,setUsers]=useState();
  return (
    
    <div>
        <article>
            <h2>Users List</h2>
            {
                users?.length
                ?(
                    <ul>
                        {users.map((user,i)  => <li key={i}>{user?.username}</li>)}
                    </ul>
                ):<p>No users to display</p>
            }
        </article>
    </div>
  )
}

export default Users