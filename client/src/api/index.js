const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const getCandidatesApi = () => {
  return fetch(`${baseApiUrl}/candidates`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get Candidates");
  });
};

export const getQuestionsApi = () => {
  return fetch(`${baseApiUrl}/questions`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to get questions");
  });
};

export const getApplicationByIdApi = (id) => {
  return fetch(`${baseApiUrl}/applications/${id}`).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("There is no application");
  });
};

export const updateApplicationByIdApi = (id, newApplication) => {
  return fetch(`${baseApiUrl}/applications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newApplication),
  }).then((res) => {
    if (res.status === 200) return res.json();
    else throw new Error("Failed to updated application");
  });
};
