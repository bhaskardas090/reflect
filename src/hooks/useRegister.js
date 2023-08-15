import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { db } from "../firebase/config";

function useRegister() {
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setLoading(true);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      dispatch({ type: "LOGIN", payload: user });
      //Checking if user already has an active routine to follow
      let routinePresent = await db.collection("routines").doc(user?.uid);
      const { exists } = await routinePresent.get();

      if (exists) {
        navigate("/");
      } else {
        navigate("/select-routine");
      }
      //
      setError(null);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { signup, loading, error };
}

export default useRegister;
