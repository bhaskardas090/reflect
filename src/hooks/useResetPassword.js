import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

function useResetPassword() {
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const resetpassword = async (email) => {
    setLoading(true);
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch({ type: 'LOGOUT' });
      setError(null);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { resetpassword, loading, error };
}

export default useResetPassword;
