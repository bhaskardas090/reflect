import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

function useLogOut() {
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      dispatch({ type: 'LOGOUT' });
      setError(null);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { logout, loading, error };
}

export default useLogOut;
