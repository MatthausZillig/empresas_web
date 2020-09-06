import React from 'react';
import { USER_POST } from '../service/api';

import useFetch from '../hooks/use-fetch/use-fetch';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const { data, client, token, uid, loading, error, request } = useFetch();

  function userLogin(username, password) {
    const { url, options } = USER_POST({ email: username, password: password });
    request(url, options);
  }

  return (
    <UserContext.Provider value={{ userLogin, data, client, token, uid, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
