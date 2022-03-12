import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const userAddHandler = (nwUser) => {
    setUsersList((prvState) => {
      const nwState = [nwUser, ...prvState];
      return nwState;
    });
  };

  return (
    <div>
      <AddUser onAddUser={userAddHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
