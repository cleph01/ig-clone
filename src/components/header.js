import React, { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  console.log('user: ', user);

  return (
    <div>
      <p>I am the Header</p>
    </div>
  );
}

export default Header;
