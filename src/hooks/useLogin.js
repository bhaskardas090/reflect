import { useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';

function useLogin() {
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: 'LOGIN', payload: user });
      setError(null);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { login, loading, error };
}

export default useLogin;
