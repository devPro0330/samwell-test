import React, { useContext, useState, useEffect } from "react";
import { getQuestionsApi } from "../api";

const GeneralContext = React.createContext();

export function useGeneral() {
  return useContext(GeneralContext);
}

export function GeneralProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    setErrors({ questions: "" });
    getQuestionsApi()
      .then((data) => setQuestions(data))
      .catch((err) => setErrors({ questions: err.message }));
  };

  const value = {
    questions,
    errors,
    setErrors,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}
