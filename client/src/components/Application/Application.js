import React from "react";
import { updateApplicationByIdApi } from "../../api";
import { useApplication } from "../../providers/ApplicationProvider";
import { useGeneral } from "../../providers/GeneralProvider";
import VideoCard from "./VideoCard";

function Application() {
  const { errors, setErrors } = useGeneral();
  const { selectedApplication, setSelectedApplication } = useApplication();

  const saveComments = (index, comments) => {
    let newApplication = { ...selectedApplication };
    newApplication.videos[index].comments = comments;
    setErrors({ application: "" });
    updateApplicationByIdApi(newApplication.id, newApplication)
      .then((data) => setSelectedApplication(data))
      .catch((err) => setErrors({ application: err.message }));
  };

  return errors.application ? (
    <h3 className="error">{errors.application}</h3>
  ) : (
    <div className="application__container">
      {selectedApplication?.videos.map((video, index) => (
        <VideoCard {...{ video, index, saveComments }} key={index} />
      ))}
    </div>
  );
}

export default Application;
