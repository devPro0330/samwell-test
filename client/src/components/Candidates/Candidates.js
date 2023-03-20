import React, { useState, useEffect, useCallback } from "react";
import { getCandidatesApi, getApplicationByIdApi } from "../../api";
import { useApplication } from "../../providers/ApplicationProvider";
import { useGeneral } from "../../providers/GeneralProvider";

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [activeId, setActiveId] = useState();
  const { setErrors, errors } = useGeneral();
  const { setSelectedApplication } = useApplication();

  const getCandidates = useCallback(() => {
    setErrors({ candidates: "" });
    getCandidatesApi()
      .then((data) => setCandidates(data))
      .catch((err) => setErrors({ candidates: err.message }));
  }, [setErrors]);

  const getApplication = (candidate) => {
    setErrors({ application: "" });
    setActiveId(candidate.id);
    getApplicationByIdApi(candidate.applicationId)
      .then((data) => setSelectedApplication(data))
      .catch((err) => setErrors({ application: err.message }));
  };

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  return (
    <div className="canditates__container">
      <h2>Our Candidates</h2>
      {errors.candidates && <h3 className="error">{errors.candidates}</h3>}
      <ul>
        {candidates.map((candidate, idx) => {
          return (
            <li key={idx}>
              <button
                className={activeId === candidate.id ? "active" : ""}
                onClick={() => getApplication(candidate)}
              >
                {candidate.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Candidates;
